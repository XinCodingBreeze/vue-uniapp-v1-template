import dayjs from "dayjs";

/**
 * 格式化时间
 * @param date 时间
 * @param format 格式化模式
 * @returns 格式化后的时间字符串
 */
export const formatDate = (
  date: string | number | Date,
  format = "YYYY-MM-DD HH:mm:ss",
): string => {
  return dayjs(date).format(format);
};

/**
 * 格式化相对时间
 * @param date 时间
 * @returns 相对时间字符串
 */
export const formatRelativeTime = (date: string | number | Date): string => {
  const now = dayjs();
  const target = dayjs(date);
  const diff = now.diff(target, "minute");

  if (diff < 1) {
    return "刚刚";
  } else if (diff < 60) {
    return `${diff}分钟前`;
  } else if (diff < 60 * 24) {
    return `${Math.floor(diff / 60)}小时前`;
  } else if (diff < 60 * 24 * 7) {
    return `${Math.floor(diff / (60 * 24))}天前`;
  } else {
    return target.format("YYYY-MM-DD");
  }
};

/**
 * 格式化文件大小
 * @param bytes 字节数
 * @returns 格式化后的文件大小
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 B";

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return (bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[i];
};

/**
 * 格式化数字（添加千分位分隔符）
 * @param number 数字
 * @returns 格式化后的数字字符串
 */
export const formatNumber = (number: number | string): string => {
  return Number(number).toLocaleString();
};

/**
 * 格式化金额
 * @param amount 金额
 * @param currency 货币符号
 * @returns 格式化后的金额字符串
 */
export const formatMoney = (
  amount: number | string,
  currency = "¥",
): string => {
  const num = Number(amount);
  return (
    currency + num.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,")
  );
};

/**
 * 格式化手机号（中间4位用*代替）
 * @param phone 手机号
 * @returns 格式化后的手机号
 */
export const formatPhone = (phone: string): string => {
  if (!phone || phone.length !== 11) return phone;
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
};

/**
 * 格式化身份证号（中间部分用*代替）
 * @param idCard 身份证号
 * @returns 格式化后的身份证号
 */
export const formatIdCard = (idCard: string): string => {
  if (!idCard) return idCard;
  if (idCard.length === 18) {
    return idCard.replace(/(\d{6})\d{8}(\d{4})/, "$1********$2");
  } else if (idCard.length === 15) {
    return idCard.replace(/(\d{6})\d{6}(\d{3})/, "$1******$2");
  }
  return idCard;
};

/**
 * 截断文本
 * @param text 文本
 * @param length 最大长度
 * @param suffix 后缀
 * @returns 截断后的文本
 */
export const truncateText = (
  text: string,
  length: number,
  suffix = "...",
): string => {
  if (!text || text.length <= length) return text;
  return text.substring(0, length) + suffix;
};

/**
 * 格式化百分比
 * @param value 数值
 * @param decimals 小数位数
 * @returns 百分比字符串
 */
export const formatPercent = (value: number, decimals = 2): string => {
  return (value * 100).toFixed(decimals) + "%";
};
