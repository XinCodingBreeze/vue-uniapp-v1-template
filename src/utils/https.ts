import { base_url, handleCode } from "./config";
import { showToast } from "@/commom";
import { getToken } from "@/commom/token";

interface ResponseData {
  code: number;
  message: string;
  result: any;
}

//  网络请求封装
const request = <T = ResponseData>(
  url: string,
  method: string,
  data: any,
  header: any,
  timeout = 30000,
) => {
  return new Promise<T>((resolve, reject) => {
    uni.showLoading({
      title: "加载中",
    });
    uni.request({
      url: base_url + url,
      method: method as "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS",
      data: data || {},
      header: {
        "X-Access-Token": getToken() || "", // 从本地存储获取 Token
        "X-Login-Type": "weixin",
        "Content-Type": "application/json;charset=UTF-8",
        // Authorization: "Basic c2FiZXI6c2FiZXJfc2VjcmV0", // 基础认证
        ...header, // 允许用户自定义请求头
      },
      timeout: timeout,

      success: (res) => {
        const { data, statusCode } = res;
        const resData = data as ResponseData;
        if (statusCode == 200) {
          if (resData.code == 200) {
            showToast(resData.message);
            resolve(resData as T);
          } else {
            handleCode(resData.code, resData.message);
          }
        } else {
          showToast(resData.message);
          reject(resData);
        }
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
        uni.hideLoading();
      },
    });
  });
};

export { request };
