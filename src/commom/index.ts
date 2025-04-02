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
