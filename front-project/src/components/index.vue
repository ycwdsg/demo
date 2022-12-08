<script setup lang="ts">
import { userInfo } from 'api/userInfo';
import Topbar from 'coms/navBar/topBar.vue';
import { getThemeStore, setThemeStyle } from '@/utils/userConfig';

// TODO:通过pinia持久化管理主题
onBeforeMount(() => {
  const theme = getThemeStore();
  setThemeStyle(theme);
});
</script>
<template>
  <div class="main">
    <Topbar />
    <a-layout class="content">
      <a-layout-sider>sider</a-layout-sider>
      <a-layout-content>content</a-layout-content>
    </a-layout>
  </div>
</template>
<style lang="scss">
.main {
  @include color('color');
  height: 100vh;
  .content {
    // 调用函数，需要传入变量时，需用插值语法
    height: sub-height(100vh, #{$tab-height});
  }
}
</style>
