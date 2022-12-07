import { defineStore } from 'pinia';

export const styleStore = defineStore('style', {
  state: () => {
    return {
      theme: 'light'
    };
  },
  persist: true,
  getters: {
    getTheme: (state) => {
      return state.theme;
    }
  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme;
    }
  }
});
