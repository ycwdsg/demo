<script setup lang="ts">
import { userInfo } from 'api/userInfo';
import Topbar from 'coms/navBar/topBar.vue';
import SiderBar from './navBar/siderBar.vue';
</script>
<template>
  <a-layout class="main">
    <SiderBar />
    <a-layout class="content">
      <Topbar />
      <a-layout-content class="container">container</a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang="scss" scoped>
.main {
  @include theme_property(color);
  height: 100vh;
  .content {
    // 调用函数，需要传入变量时，需用插值语法
    height: sub-height(100vh, #{$tab-height});
  }
}
</style>
