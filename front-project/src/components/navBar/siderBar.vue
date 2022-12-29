<script setup lang="ts">
import { isPersonal } from '@/utils/userConfig';
import { styleStore } from '@/store/style';
import siderItemVue from './siderItem.vue';

const route = useRoute();
const style = styleStore();
let dataList: Array<meta> = []; // 不确定类型
dataList = route.meta?.hasSider ? (route.meta?.menu as Array<meta>) : [];
if (dataList instanceof Array) {
  dataList.forEach((e) => {
    e.children?.length > 0 ? '' : '';
  });
}
function menuClick({ item }) {
  console.log(item);
}
</script>

<template>
  <a-layout-sider
    :theme="style.theme"
    :style="isPersonal() ? { background: 'var(--color-sider-background)' } : ''"
    class="sider"
  >
    <a-menu mode="inline">
      <siderItemVue
        v-for="(item, index) in dataList"
        :key="index"
        :item="item"
        @click="menuClick"
      ></siderItemVue>
    </a-menu>
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.sider {
}
</style>
