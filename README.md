# Vue3 UniApp 项目模板

一个基于 Vue3、TypeScript、Vite 和 TailwindCSS 的现代化 uni-app 开发模板。

## 🌟 特性

- 🚀 基于 Vue3 + Vite 构建，提供极速的开发体验
- 📦 使用 TypeScript 开发，提供更好的类型支持
- 🎨 集成 TailwindCSS，提供原子化 CSS 支持
- 📱 支持多端开发（H5、小程序、App）
- 🔧 完整的开发工具链支持
- 🎯 封装常用组件

## 🛠️ 技术栈

- **核心框架**：Vue3
- **开发语言**：TypeScript
- **构建工具**：Vite
- **UI 框架**：uni-ui
- **CSS 框架**：TailwindCSS
- **状态管理**：Pinia
- **代码规范**：ESLint + Prettier
- **版本控制**：Git

## 📁 项目结构

```
├── src/                    # 源代码目录
│   ├── api/               # API 接口管理
│   ├── components/        # 公共组件
│   ├── pages/            # 页面文件
│   ├── static/           # 静态资源
│   ├── store/            # Pinia 状态管理
│   ├── styles/           # 全局样式文件
│   ├── utils/            # 工具函数
│   └── App.vue           # 应用入口组件
├── public/                # 公共资源目录
├── .env                   # 环境变量配置
├── vite.config.ts        # Vite 配置文件
├── tailwind.config.js    # TailwindCSS 配置
├── tsconfig.json         # TypeScript 配置
├── postcss.config.ts     # PostCSS 配置
└── package.json          # 项目依赖配置
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0
- HBuilderX（用于小程序开发）

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install
```

### 开发环境运行

```bash
# H5 开发
npm run dev:h5

# 微信小程序开发
npm run dev:mp-weixin

# App 开发
npm run dev:app
```

### 生产环境构建

```bash
# H5 构建
npm run build:h5

# 微信小程序构建
npm run build:mp-weixin

# App 构建
npm run build:app
```

## 📝 功能特性详解

### 1. 多端适配

支持多端开发，包括：

- H5
- 微信小程序
- App（Android/iOS）

### 2. 组件系统

内置多种常用组件：

- newTable 组件
- newImage 组件

<!-- ### 3. 状态管理

使用 Pinia 进行状态管理，支持：

- 模块化管理
- 持久化存储
- 响应式数据 -->

## 📚 开发指南

### 新增页面

1. 在 `pages` 目录下创建页面文件
2. 在 `pages.json` 中配置路由

### 使用组件

```vue
<template>
  <view class="container">
    <new-table
      :tableConfig="generalInspection"
      :tableData="generalInspectionData"
      @selection-change="selectionChange"
    />
  </view>
</template>

<script setup lang="ts">
import newTable from "@/components/newTable/index.vue";
import { ref } from "vue";
</script>
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建新的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证

## 👥 作者

- 作者：[Mr.Hao]
- 邮箱：[19931845446@163.com]

## 🙏 致谢

感谢所有为本项目做出贡献的开发者们！
