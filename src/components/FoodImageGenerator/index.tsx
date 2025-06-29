'use client';

import React, { useState } from 'react';
import { generateImage } from '@/api/image-generation';
import { PROMPT_TEMPLATES } from '@/api/image-generation/prompt-builder';
import Image from 'next/image';

export default function FoodImageGenerator() {
  const [foodName, setFoodName] = useState('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // 使用预设模板生成图片
  const generateWithTemplate = async (templateName: keyof typeof PROMPT_TEMPLATES) => {
    if (!foodName.trim()) {
      setError('请输入食物名称');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const promptFn = PROMPT_TEMPLATES[templateName];
      const prompt = promptFn(foodName);
      setGeneratedPrompt(prompt);
      
      const response = await generateImage({ prompt });
      
      if (response.data && response.data.length > 0) {
        const imageUrl = response.data[0].url;
        setGeneratedImage(imageUrl);
      } else {
        throw new Error('未能获取生成的图片');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '生成图片时出错');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="p-6 bg-[#ebe5db] rounded-md shadow-md max-w-3xl mx-auto border border-[#d3cbbe]">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#8c6a4f]">AI 食物图片生成器</h2>
      <p className="text-[#5a4f45] mb-6 text-center">
        选择食物类型和风格，快速生成高质量美食图片
      </p>
      
      {/* 食物名称输入 */}
      <div className="mb-6">
        <label htmlFor="foodName" className="block text-sm font-medium text-[#5a4f45] mb-2">
          请输入食物名称
        </label>
        <input
          type="text"
          id="foodName"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          className="w-full px-4 py-2 border border-[#d3cbbe] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8c6a4f] bg-[#f8f5f0]"
          placeholder="例如：红烧肉、意大利面、提拉米苏"
        />
      </div>
      
      {/* 风格选择卡片 */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-[#8c6a4f]">选择图片风格</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StyleCard 
            title="新中式风格" 
            description="现代感的中式美食呈现"
            onClick={() => generateWithTemplate('MODERN_CHINESE_FOOD')}
            disabled={isLoading}
          />
          <StyleCard 
            title="传统中式风格" 
            description="经典传统的中式美食呈现"
            onClick={() => generateWithTemplate('CHINESE_FOOD')}
            disabled={isLoading}
          />
          <StyleCard 
            title="西式美食" 
            description="精致的西餐料理风格"
            onClick={() => generateWithTemplate('WESTERN_FOOD')}
            disabled={isLoading}
          />
          <StyleCard 
            title="日式料理" 
            description="精致讲究的日本料理风格"
            onClick={() => generateWithTemplate('JAPANESE_FOOD')}
            disabled={isLoading}
          />
          <StyleCard 
            title="甜点风格" 
            description="精美可爱的甜品呈现"
            onClick={() => generateWithTemplate('DESSERT')}
            disabled={isLoading}
          />
          <StyleCard 
            title="饮品风格" 
            description="特色饮品的精美呈现"
            onClick={() => generateWithTemplate('DRINK')}
            disabled={isLoading}
          />
        </div>
      </div>
      
      {/* 加载状态 */}
      {isLoading && (
        <div className="text-center py-6">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#8c6a4f]"></div>
          <p className="mt-3 text-[#5a4f45]">正在生成图片，请稍候...</p>
        </div>
      )}
      
      {/* 错误信息 */}
      {error && (
        <div className="bg-[#f8e7e7] border border-[#e5c1c1] text-[#9c4d4d] px-4 py-3 rounded-md mb-4">
          <p>{error}</p>
        </div>
      )}
      
      {/* 生成的图片 */}
      {generatedImage && !isLoading && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3 text-[#8c6a4f]">生成结果</h3>
          <div className="border border-[#d3cbbe] rounded-md overflow-hidden bg-[#f8f5f0] relative w-full h-[400px]">
            <Image 
              src={generatedImage} 
              alt={`${foodName}的AI生成图片`} 
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          
          {generatedPrompt && (
            <div className="mt-4">
              <h4 className="text-md font-medium mb-2 text-[#8c6a4f]">使用的提示词</h4>
              <div className="bg-[#f8f5f0] p-3 rounded-md border border-[#d3cbbe]">
                <p className="text-sm text-[#5a4f45]">{generatedPrompt}</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedPrompt);
                    alert('提示词已复制到剪贴板');
                  }}
                  className="mt-2 text-sm text-[#8c6a4f] hover:text-[#bc8a5f]"
                >
                  复制提示词
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// 风格选择卡片组件
interface StyleCardProps {
  title: string;
  description: string;
  onClick: () => void;
  disabled: boolean;
}

function StyleCard({ title, description, onClick, disabled }: StyleCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="border border-[#d3cbbe] rounded-md p-4 text-left transition-all hover:border-[#8c6a4f] hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed bg-[#f8f5f0]"
    >
      <h4 className="font-medium mb-1 text-[#8c6a4f]">{title}</h4>
      <p className="text-sm text-[#5a4f45]">{description}</p>
    </button>
  );
} 