// 返回图片url地址
export const getAssetsFile = (url: string) => {
  return new URL(`../assets/imags${url}`, import.meta.url).href;
};
