// 返回静态文件地址，默认指定图片
export const getAssetsFile = (url: string, path = 'imags') => {
  return new URL(`../assets/${path}/${url}`, import.meta.url).href;
};
