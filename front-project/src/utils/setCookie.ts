// 配置Cookie

// 不传expires默认删除cookie
export const setCookie = (
  userInfo: Map<string, string | number>,
  expires?: number
) => {
  let time: string | number = expires ?? 0; // 默认过期时间60分钟
  time = new Date(time).toUTCString();
  for (const key of userInfo.entries()) {
    document.cookie = `${key[0]}=${key[1]};expires=${time}`;
  }
};

const splitCookie = (v: string[]): Record<string, string> => {
  const s = document.cookie.split(';');
  const o: Record<string, string> = {};
  s.forEach((i) => {
    v.forEach((t) => {
      i.includes(t) ? (o[t] = i.slice(i.indexOf(t) + 1 + t.length).trim()) : '';
    });
  });

  return o;
};

export const getCookie = (...args: string[]) => {
  const res = splitCookie(args);
  const o: Record<string, string> = {};
  args.forEach((item: string) => {
    Object.prototype.hasOwnProperty.call(res, item)
      ? (o[item] = res[item])
      : '';
  });

  return o;
};

export const forgetAccount = (val: Pick<user, 'username' | 'password'>) => {
  const token: Map<string, number> = new Map([]);
  for (const i in val) {
    if (Object.prototype.hasOwnProperty.call(val, i)) {
      token.set(i, 0);
    }
  }
  // 将date设置为过去的时间
  setCookie(token);
};
