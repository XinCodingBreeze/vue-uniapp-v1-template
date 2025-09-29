/*
 * @Author: XinBreeze 19931845446@163.com
 * @Date: 2025-09-29 11:43:37
 * @LastEditors: XinBreeze 19931845446@163.com
 * @LastEditTime: 2025-09-29 13:45:54
 * @FilePath: \vue-uniapp-v1-template\src\common\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 通用方法
const showToast = (title: string, duration = 2000) => {
  uni.showToast({
    title: title,
    icon: "none",
    duration,
  });
};
/**
 * 图片上传
 * @param url  // 图片上传地址
 * @param file  // 图片文件
 */
const uploadImage = (url: string, file: any) => {
  uni.showLoading({
    title: "上传中",
  });
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: url, //仅为示例，非真实的接口地址
      filePath: file,
      name: "file",
      formData: {
        user: "test",
      },
      success: (uploadFileRes) => {
        resolve(uploadFileRes.data);
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

export { showToast, uploadImage };
