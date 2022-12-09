// 定义工具函数
import { ConfigProvider } from 'ant-design-vue';
import { styleStore } from 'store/style';
import { userStore } from 'store/user';

const themeValue = (name: string) => {
  return name === 'light' ? 'dark' : 'light';
};
// 设置主题
export const setTheme = (themeName: string) => {
  const style = styleStore();
  style.setTheme(themeName);
};
// 返回pinia的主题
export const getThemeStore = (): string => {
  const style = styleStore();
  return style.getTheme;
};

// 设置两个主题的样式
export const setThemeStyle = (value: string) => {
  document.documentElement.setAttribute('data-theme', value);
  ConfigProvider.config({
    theme: {
      primaryColor: value === 'dark' ? '#ccc' : '#1890ff'
    }
  });
};
// 判断主题，是否为个性化设置
export const isPersonal = () => {
  const user = userStore();
  return user.getPersonalize;
};
// 切换主题，如果主题使用了个性化配置，则主题默认按照light来修改
export const changeTheme = () => {
  const theme = getThemeStore();
  const name = themeValue(theme);
  setTheme(name);
  setThemeStyle(name);
};

export const defaultStyle = () => {
  ConfigProvider.config({
    theme: {
      primaryColor: '#1890ff'
    }
  });
};
