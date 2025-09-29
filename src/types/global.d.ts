// 全局类型定义

// 通用API响应类型
export interface ApiResponse<T = any> {
  code: number;
  message: string;
  result: T;
  success?: boolean;
  timestamp?: number;
}

// 分页响应类型
export interface PageResponse<T = any> {
  records: T[];
  total: number;
  size: number;
  current: number;
  pages: number;
}

// 分页请求参数
export interface PageParams {
  current?: number;
  size?: number;
  [key: string]: any;
}

// 用户信息类型
export interface UserInfo {
  id?: string;
  nickname?: string;
  avatar?: string;
  phone?: string;
  email?: string;
  gender?: 0 | 1 | 2; // 0: 未知, 1: 男, 2: 女
  birthday?: string;
  createTime?: string;
  updateTime?: string;
}

// 上传文件响应
export interface UploadResponse {
  url: string;
  filename: string;
  size: number;
  type: string;
}

// 微信登录参数
export interface WxLoginParams {
  code: string;
  headImg?: string;
  nickname?: string;
}

// 微信登录响应
export interface WxLoginResponse {
  token: string;
  wxUserInfo: UserInfo;
  isNewUser?: boolean;
}

// 通用选项类型
export interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
  children?: Option[];
}

// 表格列配置
export interface TableColumn {
  prop: string;
  label: string;
  width?: string | number;
  minWidth?: string | number;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  fixed?: "left" | "right";
  formatter?: (row: any, column: any, cellValue: any) => string;
}

// 表格配置
export interface TableConfig {
  columns: TableColumn[];
  showSelection?: boolean;
  showIndex?: boolean;
  border?: boolean;
  stripe?: boolean;
  size?: "small" | "medium" | "large";
}

// 组件尺寸类型
export type ComponentSize = "small" | "medium" | "large";

// 组件状态类型
export type ComponentStatus =
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";

// 加载状态
export interface LoadingState {
  loading: boolean;
  error: string | null;
  data: any;
}

// 路由元信息
export interface RouteMeta {
  title?: string;
  requiresAuth?: boolean;
  keepAlive?: boolean;
  showTabBar?: boolean;
}

// 异步组件状态
export type AsyncComponentState = "pending" | "resolved" | "rejected";
