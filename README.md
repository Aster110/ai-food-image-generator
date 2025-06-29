# AI 食物图片生成器

这是一个基于Next.js开发的AI食物图片生成器，可以根据不同的食物名称和风格参数生成精美的食物图片。

## 功能特点

- 支持多种预设风格（中式美食、西式美食、精美甜点、特色饮品）
- 自定义参数设置（风格、拍摄角度、光照、背景、盘子类型等）
- 响应式设计，适配各种设备
- 历史生成记录展示

## 快速开始

1. 克隆项目

```bash
git clone [项目地址]
cd ai-food-image-generator
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 打开浏览器访问 `http://localhost:3000`

## 使用方法

1. 点击首页上的"开始生成食物图片"按钮
2. 输入食物名称（如"红烧肉"、"意大利面"等）
3. 选择预设风格或自定义参数
4. 点击生成按钮，等待图片生成
5. 生成的图片将显示在页面上，同时会被添加到历史记录中

## 技术栈

- Next.js
- React
- TypeScript
- Tailwind CSS
- AI图像生成API

## 项目结构

```
src/
├── api/                 # API相关代码
│   ├── config.ts        # API配置
│   └── image-generation/ # 图像生成API
│       ├── index.ts     # API入口
│       ├── service.ts   # 服务层
│       ├── types.ts     # 类型定义
│       └── prompt-builder.ts # Prompt构建器
├── app/                 # Next.js应用页面
│   ├── page.tsx         # 首页
│   └── food-image-generator/ # 食物图片生成器页面
│       └── page.tsx
└── components/          # React组件
    └── FoodImageGenerator/ # 食物图片生成器组件
        └── index.tsx
```

## 注意事项

- API密钥已经直接写在代码中，方便快速使用
- 在实际生产环境中，应该使用环境变量来存储API密钥
