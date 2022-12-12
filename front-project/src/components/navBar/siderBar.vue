<script setup lang="ts">
import useCurrentInstance from 'utils/hooks';
import { setThemeStyle, isPersonal } from '@/utils/userConfig';
import { styleStore } from '@/store/style';

const globalProperties = useCurrentInstance();
const style = styleStore();
onBeforeMount(() => {
  setThemeStyle(style.theme);
});
</script>

<template>
  <a-layout-sider
    :theme="style.theme"
    :style="isPersonal() ? { background: 'var(--color-sider-background)' } : ''"
    class="sider"
  >
    <a-row>
      <a-col :span="24" class="bar-icon">
        <img :src="globalProperties.getAssetsFile('/icon.png')" alt="" />
        拖码
      </a-col>
    </a-row>
  </a-layout-sider>
</template>

<style lang="scss" scoped>
.sider {
  .bar-icon {
    @include flex(center);
    font-size: $font-title;
    margin-top: $tab-span;
    img {
      margin-right: $tab-gap;
      height: calc($tab-height * 5 / 7);
    }
  }
}
</style>
