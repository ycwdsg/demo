import { defineStore } from 'pinia';
// 抛出store对象
export const userStore = defineStore('user', {
  state: () => {
    return <user>{
      username: '',
      jurisdiction: '',
      occupation: '',
      userInfo: {
        personalize: false
      }
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
    },
    getPersonalize: (state) => {
      return state.userInfo.personalize;
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
