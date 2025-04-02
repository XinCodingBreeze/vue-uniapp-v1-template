const base_url = "http://10.2.5.6:8080";
// 上传图片地址
const upload_url = "http://10.2.5.6:8080/api/sys/common/upload";
// 访问静态资源
const static_url = "http://10.2.5.6:8080/api/sys/common/static/";
import { showToast } from "@/commom";
import { removeToken } from "@/commom/token";

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

export { base_url, handleCode, upload_url, static_url };
