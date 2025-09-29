// 环境变量配置
const isDev = process.env.NODE_ENV === "development";

// API基础地址
const base_url = isDev
  ? "http://10.2.5.6:8080"
  : "https://your-production-api.com";

// 上传图片地址
const upload_url = `${base_url}/api/sys/common/upload`;

// 访问静态资源
const static_url = `${base_url}/api/sys/common/static/`;

// 请求超时时间
const timeout = isDev ? 30000 : 10000;

// 应用配置
const appConfig = {
  title: "Vue3 UniApp Template",
  version: "1.0.0",
  debug: isDev,
};
import { showToast } from "@/common";
import { removeToken } from "@/common/token";

/**
 * 根据不通的code返回不通的提示
 * @param code 状态码
 */
const handleCode = (code: number, message: string) => {
  switch (code) {
    case 401:
      showToast(message ?? "登录失效，请重新登录");
      removeToken();
      setTimeout(() => {
        uni.navigateTo({
          url: "/pages/login/index",
        });
      }, 800);
      break;
    case 403:
      showToast(message ?? "权限不足");
      break;
    case 404:
      showToast(message ?? "请求的资源不存在");
      break;
    default:
      showToast(message ?? "请求失败");
  }
};

export { base_url, handleCode, upload_url, static_url, timeout, appConfig };
