<script setup lang="ts">
import useCurrentInstance from 'utils/hooks';
import { userStore } from '@/store/user';

const globalProperties = useCurrentInstance();
const user = userStore();
const useCenter = {
  id: 0,
  label: '用户中心',
  name: 'useCenter',
  avatar: user.getInfo?.avatar,
  router: '',
  parComponent: null,
  cldComponent: null
};
console.log(useCenter);

const menuList = ref([useCenter]);
</script>
<template>
  <div class="topBar">
    <div class="barIcon">
      <img :src="globalProperties.getAssetsFile('/icon.png')" alt="" />
    </div>
    <a-menu v-model="menuList">
      <a-menu-item v-for="item in menuList" :key="item.id">
        {{ item.label }}
      </a-menu-item>
    </a-menu>
  </div>
</template>
