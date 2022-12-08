import { defineStore } from 'pinia';
// 抛出store对象
export const userStore = defineStore('user', {
  state: () => {
    return <user>{
      username: '',
      jurisdiction: '',
      occupation: '',
      userInfo: {}
    };
  },
  persist: true, // pinia持久化
  getters: {
    getName: (state) => {
      return state.username;
    },
    getInfo: (state) => {
      return state.userInfo;
    },
    getOccupation: (state) => {
      return state.occupation;
    }
  },
  actions: {
    setName(name: string) {
      this.username = name;
    },
    setInfo(user: userInfo) {
      this.userInfo = user;
    }
  }
});
