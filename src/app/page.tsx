'use client';

import Image from "next/image";
import FoodImageGenerator from "@/components/FoodImageGenerator";
import { useState } from "react";

export default function Home() {
  const [showGenerator, setShowGenerator] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#4a3f35] dark:bg-[#2d2a24] dark:text-[#e9e2d8]">
      <div className="container mx-auto px-4 py-16">
        {/* 头部 */}
        <header className="flex justify-between items-center mb-16 border-b border-[#d3cbbe] pb-6">
          <h1 className="text-2xl font-bold text-[#8c6a4f]">AI食物图片生成器</h1>
          <nav>
            <button 
              onClick={() => setShowGenerator(!showGenerator)}
              className="px-5 py-2 bg-[#8c6a4f] text-[#f8f5f0] rounded-md hover:bg-[#735644] transition"
            >
              {showGenerator ? '查看介绍' : '开始使用'}
            </button>
          </nav>
        </header>
        
        {showGenerator ? (
          <div className="mb-16">
            <FoodImageGenerator />
          </div>
        ) : (
          <>
            {/* 主要内容 */}
            <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#8c6a4f]">
                  AI赋能<span className="text-[#bc8a5f]">美食图像</span>创作
                </h2>
                <p className="text-lg text-[#5a4f45] dark:text-[#d3cbbe] mb-8">
                  为内容创作者、餐饮商家和美食博主提供高效的AI美食图片生成解决方案，
                  节省拍摄与编辑时间，提升内容效率。
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setShowGenerator(true)}
                    className="px-6 py-3 bg-[#8c6a4f] text-[#f8f5f0] rounded-md text-center hover:bg-[#735644] transition font-medium"
                  >
                    立即生成美食图片
                  </button>
                  <a 
                    href="#features" 
                    className="px-6 py-3 border border-[#d3cbbe] rounded-md text-center hover:bg-[#ebe5db] dark:hover:bg-[#3a3631] transition font-medium"
                  >
                    了解更多
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md h-80 bg-[#ebe5db] dark:bg-[#3a3631] rounded-md overflow-hidden border border-[#d3cbbe]">
                  <Image 
                    src="/demo.png" 
                    alt="美食图片示例" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </main>
            
            {/* 特点介绍 */}
            <section id="features" className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#8c6a4f]">为什么选择我们</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#ebe5db] dark:bg-[#3a3631] p-6 rounded-md shadow-md border border-[#d3cbbe]">
                  <div className="w-12 h-12 bg-[#f8f5f0] dark:bg-[#2d2a24] rounded-full flex items-center justify-center mb-4 border border-[#d3cbbe]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8c6a4f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8c6a4f]">高效创作</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">
                    告别传统拍摄的高成本和繁琐流程，几秒钟内生成专业级美食图片。
                  </p>
                </div>
                <div className="bg-[#ebe5db] dark:bg-[#3a3631] p-6 rounded-md shadow-md border border-[#d3cbbe]">
                  <div className="w-12 h-12 bg-[#f8f5f0] dark:bg-[#2d2a24] rounded-full flex items-center justify-center mb-4 border border-[#d3cbbe]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8c6a4f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8c6a4f]">多样风格</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">
                    提供多种美食图片风格选择，从传统中式到现代西式，满足不同场景需求。
                  </p>
                </div>
                <div className="bg-[#ebe5db] dark:bg-[#3a3631] p-6 rounded-md shadow-md border border-[#d3cbbe]">
                  <div className="w-12 h-12 bg-[#f8f5f0] dark:bg-[#2d2a24] rounded-full flex items-center justify-center mb-4 border border-[#d3cbbe]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8c6a4f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#8c6a4f]">专业品质</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">
                    利用先进AI技术生成高质量图像，适用于菜单、社交媒体和广告素材。
                  </p>
                </div>
              </div>
            </section>
            
            {/* 使用场景 */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#8c6a4f]">适用场景</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 border border-[#d3cbbe] rounded-md bg-[#ebe5db] dark:bg-[#3a3631]">
                  <h3 className="font-semibold mb-2 text-[#8c6a4f]">餐厅菜单</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">为餐厅菜单创建吸引人的菜品图片，提升顾客点餐欲望</p>
                </div>
                <div className="p-4 border border-[#d3cbbe] rounded-md bg-[#ebe5db] dark:bg-[#3a3631]">
                  <h3 className="font-semibold mb-2 text-[#8c6a4f]">社交媒体</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">为美食博主提供高质量内容素材，增加粉丝互动与关注</p>
                </div>
                <div className="p-4 border border-[#d3cbbe] rounded-md bg-[#ebe5db] dark:bg-[#3a3631]">
                  <h3 className="font-semibold mb-2 text-[#8c6a4f]">食谱网站</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">为食谱和烹饪指南配图，让读者更直观了解成品效果</p>
                </div>
                <div className="p-4 border border-[#d3cbbe] rounded-md bg-[#ebe5db] dark:bg-[#3a3631]">
                  <h3 className="font-semibold mb-2 text-[#8c6a4f]">广告营销</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">为餐饮品牌广告创建专业视觉素材，提升营销效果</p>
                </div>
              </div>
            </section>
            
            {/* SEO FAQ部分 */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-[#8c6a4f]">常见问题</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-[#ebe5db] dark:bg-[#3a3631] p-6 rounded-md border border-[#d3cbbe]">
                  <h3 className="text-xl font-semibold mb-2 text-[#8c6a4f]">AI生成的食物图片可以用于商业用途吗？</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">
                    是的，我们的AI生成图片可用于商业用途，包括餐厅菜单、广告和社交媒体营销。我们提供的图片没有版权限制，您可以自由使用于各种商业场景。
                  </p>
                </div>
                
                <div className="bg-[#ebe5db] dark:bg-[#3a3631] p-6 rounded-md border border-[#d3cbbe]">
                  <h3 className="text-xl font-semibold mb-2 text-[#8c6a4f]">如何获得最佳的AI美食图片效果？</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">
                    要获得最佳效果，建议提供具体的食物名称，并选择适合该食物的风格。例如，中式菜肴选择传统中式或新中式风格，西餐选择西式风格等。系统会根据您的选择自动优化生成参数。
                  </p>
                </div>
                
                <div className="bg-[#ebe5db] dark:bg-[#3a3631] p-6 rounded-md border border-[#d3cbbe]">
                  <h3 className="text-xl font-semibold mb-2 text-[#8c6a4f]">AI生成的食物图片与真实拍摄有什么区别？</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">
                    AI生成的食物图片可以在几秒钟内完成，无需专业摄影设备、场地和团队，大大节省时间和成本。虽然真实拍摄可能在某些细节上更精确，但AI生成的图片在视觉吸引力和整体美感上已经达到了专业水准，且更加灵活多变。
                  </p>
                </div>
                
                <div className="bg-[#ebe5db] dark:bg-[#3a3631] p-6 rounded-md border border-[#d3cbbe]">
                  <h3 className="text-xl font-semibold mb-2 text-[#8c6a4f]">我可以指定特定的食物摆盘和背景吗？</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">
                    是的，我们的系统支持多种风格选择，包括不同的摆盘方式和背景环境。您可以选择新中式、传统中式、西式、日式等不同风格，每种风格都有对应的摆盘和背景设计，以确保生成的图片符合您的期望。
                  </p>
                </div>
                
                <div className="bg-[#ebe5db] dark:bg-[#3a3631] p-6 rounded-md border border-[#d3cbbe]">
                  <h3 className="text-xl font-semibold mb-2 text-[#8c6a4f]">生成的图片分辨率如何？可以用于高清印刷吗？</h3>
                  <p className="text-[#5a4f45] dark:text-[#d3cbbe]">
                    我们生成的图片采用高分辨率标准，适合用于网站、社交媒体和印刷材料。图片质量足够支持菜单、宣传册等常见印刷品的需求，确保清晰度和细节表现。
                  </p>
                </div>
              </div>
            </section>
            
            {/* 行动召唤 */}
            <section className="bg-[#8c6a4f] text-[#f8f5f0] p-8 rounded-md text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">立即开始生成美食图片</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                无需专业摄影设备和技术，只需简单几步，即可获得专业级美食图片
              </p>
              <button 
                onClick={() => setShowGenerator(true)}
                className="inline-block px-8 py-3 bg-[#f8f5f0] text-[#8c6a4f] font-medium rounded-md hover:bg-[#ebe5db] transition"
              >
                免费试用
              </button>
            </section>
          </>
        )}
      </div>
      
      {/* 页脚 */}
      <footer className="bg-[#ebe5db] dark:bg-[#3a3631] py-8 border-t border-[#d3cbbe]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#5a4f45] dark:text-[#d3cbbe] mb-4 md:mb-0">
              © {new Date().getFullYear()} AI食物图片生成器 | 为餐饮行业提供AI图像解决方案
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#8c6a4f] hover:text-[#bc8a5f]">
                关于我们
              </a>
              <a href="#" className="text-[#8c6a4f] hover:text-[#bc8a5f]">
                使用条款
              </a>
              <a href="#" className="text-[#8c6a4f] hover:text-[#bc8a5f]">
                隐私政策
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
