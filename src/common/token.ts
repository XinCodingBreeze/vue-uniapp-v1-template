// 获取token
const getToken = () => {
  return uni.getStorageSync("token");
};

// 设置token
const setToken = (token: string) => {
  uni.setStorageSync("token", token);
};

// 删除token
const removeToken = () => {
  uni.removeStorageSync("token");
};

export { getToken, setToken, removeToken };
