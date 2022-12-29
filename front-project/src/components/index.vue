<script setup lang="ts">
import { userInfo } from 'api/userInfo';
import Topbar from 'coms/navBar/topBar.vue';
import SiderBar from './navBar/siderBar.vue';
import { styleStore } from '@/store/style';
import { setThemeStyle } from '@/utils/userConfig';

const style = styleStore();
onBeforeMount(() => {
  setThemeStyle(style.theme);
});
const route = useRoute();
</script>
<template>
  <a-layout class="main">
    <Topbar />
    <a-layout class="content">
      <SiderBar v-if="route.meta?.hasSider" />
      <a-layout-content class="container">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<style lang="scss" scoped>
.main {
  @include theme_property(color);
  height: 100vh;
  .content {
    height: calc(100vh - $tab-height);
    .container {
    }
  }
}
</style>
