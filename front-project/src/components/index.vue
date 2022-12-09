<script setup lang="ts">
import { userInfo } from 'api/userInfo';
import Topbar from 'coms/navBar/topBar.vue';
import { setThemeStyle, isPersonal } from '@/utils/userConfig';
import { styleStore } from '@/store/style';

const style = styleStore();
onBeforeMount(() => {
  setThemeStyle(style.theme);
});
//
</script>
<template>
  <div class="main">
    <Topbar />
    <a-layout class="content">
      <a-layout-sider
        :theme="style.theme"
        :style="
          isPersonal() ? { background: 'var(--color-sider-background)' } : ''
        "
      >
        sider
      </a-layout-sider>
      <a-layout-content class="container">content</a-layout-content>
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
