'use client';

import Image from "next/image";
import FoodImageGenerator from "@/components/FoodImageGenerator";
import { useState, useEffect } from "react";

export default function Home() {
  const [showGenerator, setShowGenerator] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 处理滚动事件，实现页头固定效果
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f7f4] to-[#f0ece5] text-[#333333] dark:bg-gradient-to-b dark:from-[#1d1d1f] dark:to-[#2d2d30] dark:text-[#f5f5f7]">
      {/* 固定页头 */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#f8f7f4]/90 dark:bg-[#1d1d1f]/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-medium bg-gradient-to-r from-[#8c6a4f] to-[#bc8a5f] bg-clip-text text-transparent">食境</h1>
          <nav>
            <button 
              onClick={() => setShowGenerator(!showGenerator)}
              className="px-5 py-2 bg-gradient-to-r from-[#8c6a4f] to-[#bc8a5f] text-white rounded-full hover:opacity-90 transition-all duration-300 text-sm font-medium"
            >
              {showGenerator ? '查看介绍' : '开始使用'}
            </button>
          </nav>
        </div>
      </header>
      
      <div className="container mx-auto px-6 pt-24 pb-16">
        {showGenerator ? (
          <div className="mt-16 mb-16">
            <FoodImageGenerator />
          </div>
        ) : (
          <>
            {/* 主要内容 - 苹果风格的英雄区域 */}
            <main className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32 mt-16">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
                  <span className="bg-gradient-to-r from-[#8c6a4f] to-[#bc8a5f] bg-clip-text text-transparent">食境</span>
                  <span className="block text-3xl md:text-4xl mt-2 font-normal text-[#1d1d1f] dark:text-[#f5f5f7]">AI赋能的美食图像创作</span>
                </h2>
                <p className="text-lg text-[#86868b] dark:text-[#a1a1a6] leading-relaxed max-w-lg">
                  为内容创作者、餐饮商家和美食博主提供高效的AI美食图片生成解决方案，
                  节省拍摄与编辑时间，提升内容效率。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => setShowGenerator(true)}
                    className="px-8 py-3 bg-gradient-to-r from-[#8c6a4f] to-[#bc8a5f] text-white rounded-full hover:opacity-90 transition-all duration-300 font-medium text-sm"
                  >
                    立即生成美食图片
                  </button>
                  <a 
                    href="#features" 
                    className="px-8 py-3 border border-[#86868b] rounded-full text-center hover:bg-[#f2f2f7] dark:hover:bg-[#2c2c2e] transition-all duration-300 font-medium text-sm"
                  >
                    了解更多
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
                  <Image 
                    src="/demo.png" 
                    alt="美食图片示例" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-all duration-700 hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </main>
            
            {/* 特点介绍 - 呼吸感设计 */}
            <section id="features" className="mb-32 scroll-mt-24">
              <h2 className="text-3xl font-semibold text-center mb-4 bg-gradient-to-r from-[#8c6a4f] to-[#bc8a5f] bg-clip-text text-transparent">为什么选择食境</h2>
              <p className="text-center text-[#86868b] dark:text-[#a1a1a6] mb-16 max-w-2xl mx-auto">我们致力于为您提供最优质的AI美食图像生成体验</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/50 dark:bg-[#2c2c2e]/50 p-8 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8c6a4f] to-[#bc8a5f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]">高效创作</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                    告别传统拍摄的高成本和繁琐流程，几秒钟内生成专业级美食图片。
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-[#2c2c2e]/50 p-8 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8c6a4f] to-[#bc8a5f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]">多样风格</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                    提供多种美食图片风格选择，从传统中式到现代西式，满足不同场景需求。
                  </p>
                </div>
                <div className="bg-white/50 dark:bg-[#2c2c2e]/50 p-8 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#8c6a4f] to-[#bc8a5f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]">专业品质</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                    利用先进AI技术生成高质量图像，适用于菜单、社交媒体和广告素材。
                  </p>
                </div>
              </div>
            </section>
            
            {/* 使用场景 - 苹果风格网格 */}
            <section className="mb-32">
              <h2 className="text-3xl font-semibold text-center mb-4 bg-gradient-to-r from-[#8c6a4f] to-[#bc8a5f] bg-clip-text text-transparent">适用场景</h2>
              <p className="text-center text-[#86868b] dark:text-[#a1a1a6] mb-16 max-w-2xl mx-auto">为各种美食相关场景提供完美解决方案</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-white/50 dark:bg-[#2c2c2e]/50 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group">
                  <h3 className="font-semibold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#8c6a4f] transition-all duration-300">餐厅菜单</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">为餐厅菜单创建吸引人的菜品图片，提升顾客点餐欲望</p>
                </div>
                <div className="p-6 bg-white/50 dark:bg-[#2c2c2e]/50 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group">
                  <h3 className="font-semibold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#8c6a4f] transition-all duration-300">社交媒体</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">为美食博主提供高质量内容素材，增加粉丝互动与关注</p>
                </div>
                <div className="p-6 bg-white/50 dark:bg-[#2c2c2e]/50 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group">
                  <h3 className="font-semibold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#8c6a4f] transition-all duration-300">食谱网站</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">为食谱和烹饪指南配图，让读者更直观了解成品效果</p>
                </div>
                <div className="p-6 bg-white/50 dark:bg-[#2c2c2e]/50 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] group">
                  <h3 className="font-semibold mb-3 text-[#1d1d1f] dark:text-[#f5f5f7] group-hover:text-[#8c6a4f] transition-all duration-300">广告营销</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">为餐饮品牌广告创建专业视觉素材，提升营销效果</p>
                </div>
              </div>
            </section>
            
            {/* SEO FAQ部分 - 苹果风格折叠面板 */}
            <section className="mb-32">
              <h2 className="text-3xl font-semibold text-center mb-4 bg-gradient-to-r from-[#8c6a4f] to-[#bc8a5f] bg-clip-text text-transparent">常见问题</h2>
              <p className="text-center text-[#86868b] dark:text-[#a1a1a6] mb-16 max-w-2xl mx-auto">了解更多关于食境的常见问题</p>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="bg-white/50 dark:bg-[#2c2c2e]/50 p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-medium mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]">AI生成的食物图片可以用于商业用途吗？</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                    是的，我们的AI生成图片可用于商业用途，包括餐厅菜单、广告和社交媒体营销。我们提供的图片没有版权限制，您可以自由使用于各种商业场景。
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-[#2c2c2e]/50 p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-medium mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]">如何获得最佳的AI美食图片效果？</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                    要获得最佳效果，建议提供具体的食物名称，并选择适合该食物的风格。例如，中式菜肴选择传统中式或新中式风格，西餐选择西式风格等。系统会根据您的选择自动优化生成参数。
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-[#2c2c2e]/50 p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-medium mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]">AI生成的食物图片与真实拍摄有什么区别？</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                    AI生成的食物图片可以在几秒钟内完成，无需专业摄影设备、场地和团队，大大节省时间和成本。虽然真实拍摄可能在某些细节上更精确，但AI生成的图片在视觉吸引力和整体美感上已经达到了专业水准，且更加灵活多变。
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-[#2c2c2e]/50 p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-medium mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]">我可以指定特定的食物摆盘和背景吗？</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                    是的，我们的系统支持多种风格选择，包括不同的摆盘方式和背景环境。您可以选择新中式、传统中式、西式、日式等不同风格，每种风格都有对应的摆盘和背景设计，以确保生成的图片符合您的期望。
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-[#2c2c2e]/50 p-6 rounded-2xl shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md">
                  <h3 className="text-xl font-medium mb-3 text-[#1d1d1f] dark:text-[#f5f5f7]">生成的图片分辨率如何？可以用于高清印刷吗？</h3>
                  <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed">
                    我们生成的图片采用高分辨率标准，适合用于网站、社交媒体和印刷材料。图片质量足够支持菜单、宣传册等常见印刷品的需求，确保清晰度和细节表现。
                  </p>
                </div>
              </div>
            </section>
            
            {/* 行动召唤 - 苹果风格渐变背景 */}
            <section className="bg-gradient-to-r from-[#8c6a4f] to-[#bc8a5f] p-16 rounded-2xl text-center mb-16 shadow-lg transform transition-all duration-500 hover:scale-[1.01]">
              <h2 className="text-3xl font-semibold mb-4 text-white">立即开始使用食境</h2>
              <p className="mb-8 max-w-2xl mx-auto text-white/90 leading-relaxed">
                无需专业摄影设备和技术，只需简单几步，即可获得专业级美食图片
              </p>
              <button 
                onClick={() => setShowGenerator(true)}
                className="inline-block px-8 py-3 bg-white text-[#8c6a4f] font-medium rounded-full hover:bg-white/90 transition-all duration-300 shadow-md"
              >
                免费试用
              </button>
            </section>
          </>
        )}
      </div>
      
      {/* 页脚 - 苹果风格简约设计 */}
      <footer className="bg-[#f2f2f7] dark:bg-[#1d1d1f] py-12 border-t border-[#d2d2d7] dark:border-[#424245]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#86868b] dark:text-[#a1a1a6] mb-6 md:mb-0">
              © {new Date().getFullYear()} 食境 | 为餐饮行业提供AI图像解决方案
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-[#86868b] dark:text-[#a1a1a6] hover:text-[#8c6a4f] dark:hover:text-[#bc8a5f] transition-colors duration-300">
                关于我们
              </a>
              <a href="#" className="text-[#86868b] dark:text-[#a1a1a6] hover:text-[#8c6a4f] dark:hover:text-[#bc8a5f] transition-colors duration-300">
                使用条款
              </a>
              <a href="#" className="text-[#86868b] dark:text-[#a1a1a6] hover:text-[#8c6a4f] dark:hover:text-[#bc8a5f] transition-colors duration-300">
                隐私政策
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
