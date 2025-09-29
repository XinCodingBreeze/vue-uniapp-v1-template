/**
 * 验证手机号
 * @param phone 手机号
 * @returns 是否有效
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^1[3-9]\d{9}$/;
  return phoneRegex.test(phone);
};

/**
 * 验证邮箱
 * @param email 邮箱
 * @returns 是否有效
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 验证身份证号
 * @param idCard 身份证号
 * @returns 是否有效
 */
export const isValidIdCard = (idCard: string): boolean => {
  // 18位身份证号码正则
  const idCard18 =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  // 15位身份证号码正则
  const idCard15 =
    /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$/;

  return idCard18.test(idCard) || idCard15.test(idCard);
};

/**
 * 验证密码强度
 * @param password 密码
 * @returns 强度等级 0-4
 */
export const getPasswordStrength = (password: string): number => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z\d]/.test(password)) strength++;

  return strength;
};

/**
 * 验证URL
 * @param url URL地址
 * @returns 是否有效
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * 验证中文姓名
 * @param name 姓名
 * @returns 是否有效
 */
export const isValidChineseName = (name: string): boolean => {
  const nameRegex = /^[\u4e00-\u9fa5]{2,8}$/;
  return nameRegex.test(name);
};

/**
 * 验证银行卡号
 * @param cardNumber 银行卡号
 * @returns 是否有效
 */
export const isValidBankCard = (cardNumber: string): boolean => {
  const bankCardRegex = /^\d{16,19}$/;
  return bankCardRegex.test(cardNumber);
};

/**
 * 验证IP地址
 * @param ip IP地址
 * @returns 是否有效
 */
export const isValidIP = (ip: string): boolean => {
  const ipRegex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return ipRegex.test(ip);
};

/**
 * 验证是否为空
 * @param value 值
 * @returns 是否为空
 */
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
};

/**
 * 验证是否为数字
 * @param value 值
 * @returns 是否为数字
 */
export const isNumber = (value: any): boolean => {
  return !isNaN(Number(value)) && isFinite(Number(value));
};

/**
 * 验证是否为整数
 * @param value 值
 * @returns 是否为整数
 */
export const isInteger = (value: any): boolean => {
  return Number.isInteger(Number(value));
};

/**
 * 验证数值范围
 * @param value 值
 * @param min 最小值
 * @param max 最大值
 * @returns 是否在范围内
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * 验证字符串长度
 * @param str 字符串
 * @param min 最小长度
 * @param max 最大长度
 * @returns 是否符合长度要求
 */
export const isValidLength = (
  str: string,
  min: number,
  max?: number,
): boolean => {
  const length = str.length;
  if (max !== undefined) {
    return length >= min && length <= max;
  }
  return length >= min;
};
