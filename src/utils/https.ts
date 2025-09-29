import { base_url, handleCode, timeout } from "./config";
import { showToast } from "@/common";
import { getToken } from "@/common/token";
import type { ApiResponse } from "@/types/global";

// 请求拦截器列表
type RequestInterceptor = (
  config: RequestConfig,
) => RequestConfig | Promise<RequestConfig>;
type ResponseInterceptor = (response: any) => any;
type ErrorInterceptor = (error: any) => any;

interface RequestConfig {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS";
  data?: any;
  header?: Record<string, string>;
  timeout?: number;
}

class HttpClient {
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];
  private errorInterceptors: ErrorInterceptor[] = [];

  // 添加请求拦截器
  addRequestInterceptor(interceptor: RequestInterceptor) {
    this.requestInterceptors.push(interceptor);
  }

  // 添加响应拦截器
  addResponseInterceptor(interceptor: ResponseInterceptor) {
    this.responseInterceptors.push(interceptor);
  }

  // 添加错误拦截器
  addErrorInterceptor(interceptor: ErrorInterceptor) {
    this.errorInterceptors.push(interceptor);
  }

  // 请求方法
  async request<T = ApiResponse>(config: RequestConfig): Promise<T> {
    try {
      // 执行请求拦截器
      let processedConfig = config;
      for (const interceptor of this.requestInterceptors) {
        processedConfig = await interceptor(processedConfig);
      }

      return new Promise<T>((resolve, reject) => {
        uni.showLoading({
          title: "加载中",
        });

        uni.request({
          url: base_url + processedConfig.url,
          method: processedConfig.method,
          data: processedConfig.data || {},
          header: {
            "X-Access-Token": getToken() || "",
            "X-Login-Type": "weixin",
            "Content-Type": "application/json;charset=UTF-8",
            ...processedConfig.header,
          },
          timeout: processedConfig.timeout || timeout,

          success: async (res) => {
            try {
              const { data, statusCode } = res;
              let responseData = data as ApiResponse;

              // 执行响应拦截器
              for (const interceptor of this.responseInterceptors) {
                responseData = await interceptor(responseData);
              }

              if (statusCode === 200) {
                if (responseData.code === 200) {
                  resolve(responseData as T);
                } else {
                  handleCode(responseData.code, responseData.message);
                  reject(responseData);
                }
              } else {
                showToast(responseData.message || `请求失败 ${statusCode}`);
                reject(responseData);
              }
            } catch (error) {
              // 执行错误拦截器
              for (const interceptor of this.errorInterceptors) {
                await interceptor(error);
              }
              reject(error);
            }
          },

          fail: async (err) => {
            // 执行错误拦截器
            for (const interceptor of this.errorInterceptors) {
              await interceptor(err);
            }
            showToast("网络请求失败");
            reject(err);
          },

          complete: () => {
            uni.hideLoading();
          },
        });
      });
    } catch (error) {
      // 执行错误拦截器
      for (const interceptor of this.errorInterceptors) {
        await interceptor(error);
      }
      throw error;
    }
  }

  // GET 请求
  get<T = ApiResponse>(
    url: string,
    params?: any,
    header?: Record<string, string>,
  ): Promise<T> {
    const query = params
      ? "?" +
        Object.keys(params)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
          )
          .join("&")
      : "";

    return this.request<T>({
      url: url + query,
      method: "GET",
      header,
    });
  }

  // POST 请求
  post<T = ApiResponse>(
    url: string,
    data?: any,
    header?: Record<string, string>,
  ): Promise<T> {
    return this.request<T>({
      url,
      method: "POST",
      data,
      header,
    });
  }

  // PUT 请求
  put<T = ApiResponse>(
    url: string,
    data?: any,
    header?: Record<string, string>,
  ): Promise<T> {
    return this.request<T>({
      url,
      method: "PUT",
      data,
      header,
    });
  }

  // DELETE 请求
  delete<T = ApiResponse>(
    url: string,
    data?: any,
    header?: Record<string, string>,
  ): Promise<T> {
    return this.request<T>({
      url,
      method: "DELETE",
      data,
      header,
    });
  }
}

// 创建默认实例
const httpClient = new HttpClient();

// 添加默认拦截器
httpClient.addRequestInterceptor((config) => {
  // 可以在这里添加默认的请求头、参数等
  console.log("Request:", config);
  return config;
});

httpClient.addResponseInterceptor((response) => {
  // 可以在这里处理响应数据
  console.log("Response:", response);
  return response;
});

httpClient.addErrorInterceptor((error) => {
  // 可以在这里处理错误
  console.error("Request Error:", error);
  return error;
});

// 保留向后兼容的请求方法
const request = <T = ApiResponse>(
  url: string,
  method: string,
  data: any,
  header: any,
  requestTimeout = 30000,
) => {
  return httpClient.request<T>({
    url,
    method: method as "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS",
    data,
    header,
    timeout: requestTimeout,
  });
};

// 导出
export {
  request,
  httpClient,
  HttpClient,
  type RequestConfig,
  type RequestInterceptor,
  type ResponseInterceptor,
  type ErrorInterceptor,
};
