# Vue3 UniApp 项目模板

一个基于 Vue3、TypeScript、Vite 和 TailwindCSS 的现代化 uni-app 开发模板。

## 🌟 特性

- 🚀 基于 Vue3 + Vite 构建，提供极速的开发体验
- 📦 使用 TypeScript 开发，提供更好的类型支持
- 🎨 集成 TailwindCSS，提供原子化 CSS 支持
- 📱 支持多端开发（H5、小程序、App）
- 🔧 完整的开发工具链支持
- 🎯 封装常用组件和工具函数
- 🗂️ 简单的用户状态管理
- 🌐 完善的 HTTP 请求封装，支持拦截器
- 📋 丰富的类型定义和工具函数
- 🎛️ Prettier 代码格式化
- 🔒 完整的表单验证工具

## 🛠️ 技术栈

- **核心框架**：Vue3 + Composition API
- **开发语言**：TypeScript
- **构建工具**：Vite
- **UI 框架**：uview-plus + uni-ui
- **CSS 框架**：TailwindCSS + SCSS
- **状态管理**：简单的响应式状态管理
- **代码规范**：Prettier + TypeScript
- **工具库**：dayjs + clipboard
- **版本控制**：Git

## 📁 项目结构

```
vue-uniapp-v1-template/
├── src/                          # 源代码目录
│   ├── api/                     # API 接口管理
│   │   └── index.ts            # API 接口定义
│   ├── common/                  # 公共工具
│   │   ├── index.ts            # 通用工具函数
│   │   └── token.ts            # Token 管理
│   ├── components/              # 公共组件
│   │   ├── Empty/              # 空状态组件
│   │   ├── Loading/            # 加载组件
│   │   ├── Modal/              # 弹窗组件
│   │   ├── newImage/           # 图片组件
│   │   ├── newTable/           # 表格组件
│   │   ├── packageList/        # 包列表组件
│   │   └── tabbar/             # 自定义tabbar
│   ├── pages/                   # 页面文件
│   │   ├── home/               # 首页
│   │   ├── login/              # 登录页
│   │   └── my/                 # 个人中心
│   ├── static/                  # 静态资源
│   │   ├── home/               # 首页相关图片
│   │   └── tabBar/             # tabbar图标
│   ├── types/                   # 类型定义
│   │   └── global.d.ts         # 全局类型定义
│   ├── utils/                   # 工具函数
│   │   ├── config.ts           # 配置文件
│   │   ├── format.ts           # 格式化工具
│   │   ├── https.ts            # HTTP 请求封装
│   │   ├── user.ts             # 用户状态管理
│   │   └── validate.ts         # 验证工具
│   ├── App.vue                 # 应用入口组件
│   ├── main.ts                 # 主入口文件
│   ├── pages.json              # 页面路由配置
│   └── uni.scss                # 全局样式
├── .prettierrc.js              # Prettier 配置
├── package.json                # 项目依赖配置
├── tailwind.config.js          # TailwindCSS 配置
├── tsconfig.json               # TypeScript 配置
├── vite.config.ts              # Vite 配置文件
└── README.md                   # 项目说明文档
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
- 支付宝小程序
- 百度小程序
- 字节跳动小程序

### 2. 组件系统

内置多种常用组件：

- **newImage 组件**：支持加载状态、错误处理的图片组件
- **newTable 组件**：功能完整的表格组件
- **Loading 组件**：多种样式的加载组件
- **Modal 组件**：灵活配置的弹窗组件
- **Empty 组件**：空状态展示组件
- **Tabbar 组件**：自定义底部导航栏

### 3. 用户状态管理

使用简单的用户状态管理，支持：

- 用户信息存储
- 登录状态管理
- 本地存储持久化
- TypeScript 类型支持

### 4. HTTP 请求封装

完善的网络请求解决方案：

- 请求/响应拦截器
- 自动 Token 管理
- 错误统一处理
- 支持多种请求方式
- TypeScript 类型推断

### 5. 工具函数库

丰富的工具函数：

- **格式化工具**：时间、金额、文件大小等格式化
- **验证工具**：手机号、邮箱、身份证等验证
- **通用工具**：防抖、节流、深拷贝等

### 6. 代码规范

完整的代码规范体系：

- Prettier 代码格式化
- TypeScript 类型检查

## 📚 开发指南

### 1. 新增页面

1. 在 `pages` 目录下创建页面文件
2. 在 `pages.json` 中配置路由

```json
{
  "path": "pages/example/index",
  "style": {
    "navigationBarTitleText": "示例页面"
  }
}
```

### 2. 使用组件

#### 表格组件

```vue
<template>
  <new-table
    :tableConfig="tableConfig"
    :tableData="tableData"
    @selection-change="onSelectionChange"
  />
</template>

<script setup lang="ts">
import newTable from "@/components/newTable/index.vue";
import type { TableConfig } from "@/types/global";

const tableConfig: TableConfig = {
  columns: [
    { prop: "name", label: "姓名", width: "100" },
    { prop: "age", label: "年龄", width: "80" },
  ],
  showSelection: true,
};
</script>
```

#### 加载组件

```vue
<template>
  <Loading :visible="loading" text="加载中..." type="spinner" />
</template>

<script setup lang="ts">
import Loading from "@/components/Loading/index.vue";
</script>
```

#### 弹窗组件

```vue
<template>
  <Modal
    :visible="showModal"
    title="提示"
    content="确定要删除吗？"
    @confirm="handleConfirm"
    @close="showModal = false"
  />
</template>
```

### 3. 用户状态管理

```typescript
// 使用用户状态
import { useUser } from "@/utils/user";

const { userInfo, isLoggedIn, login, logout, initUserInfo } = useUser();

// 登录
login(token, userInfo);

// 获取用户信息
const info = userInfo;
const loggedIn = isLoggedIn();

// 退出登录
logout();
```

### 4. HTTP 请求

```typescript
import { httpClient } from "@/utils/https";
import type { ApiResponse, UserInfo } from "@/types/global";

// GET 请求
const getUserInfo = async () => {
  const response =
    await httpClient.get<ApiResponse<UserInfo>>("/api/user/info");
  return response.result;
};

// POST 请求
const updateUser = async (data: Partial<UserInfo>) => {
  return await httpClient.post("/api/user/update", data);
};
```

### 5. 工具函数

```typescript
import { formatDate, formatMoney, isValidPhone } from "@/utils/format";
import { validatePhone, isEmpty } from "@/utils/validate";

// 格式化
const date = formatDate(new Date(), "YYYY-MM-DD");
const money = formatMoney(12345.67); // ¥12,345.67

// 验证
const isValid = isValidPhone("13800138000"); // true
```

### 6. 代码规范

```bash
# 代码格式化
npm run format

# 类型检查
npm run type-check
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
