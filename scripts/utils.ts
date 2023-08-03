/**
 * 将字符串转换为首字母大写的驼峰格式
 * @description: 首字母大写 
 * @param str - 需要转换的字符串
 * @returns 转换后的字符串
 * @example
 * ```
 * capitalize('foo-bar'); // 'FooBar'
 * capitalize('foo_bar'); // 'FooBar'
 * capitalize('foo bar'); // 'FooBar'
 * capitalize('foo.bar'); // 'FooBar'
 * capitalize('foo/bar'); // 'FooBar'
 * capitalize('fooBar'); // 'FooBar'
 * ```
 */
export const capitalize = (str: string) => {
  // 如果字符串为空，直接返回空字符串
  if (!str) return "";
  // 使用正则表达式和 replace 方法，将字符串中的连接符和后面的字母替换为大写字母
  // 例如，将 "ab-cd" 替换为 "abCd"
  str = str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
  // 使用 slice 方法，将字符串的第一个字母替换为大写字母
  // 例如，将 "abCd" 替换为 "AbCd"
  str = str.slice(0, 1).toUpperCase() + str.slice(1);
  // 返回处理后的字符串
  return str;
};
