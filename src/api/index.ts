import { request } from "@/utils/https";

interface ResponseData {
  code: number;
  message: string;
  result: any;
}

const login = (data: any) => {
  return request<ResponseData>("/api/wx/login", "POST", data, {});
};

/**
 * 文件上传
 */
const uploadFile = (data: any) => {
  return request<ResponseData>("/sys/common/upload ", "POST", data, {});
};

export { login, uploadFile };
