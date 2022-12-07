<script setup lang="ts">
import useCurrentInstance from 'utils/hooks';
import { userStore } from '@/store/user';
import { configList, config } from './configList';

const globalProperties = useCurrentInstance();
const user = userStore();
const useCenter = reactive({
  avatar: user.getInfo?.avatar,
  username: user.getName
});

const menuList = ref([useCenter]);
const handlePop = (item: config) => {
  item.method ? item.method() : '';
};
</script>
<template>
  <a-row class="top-bar">
    <a-col :span="6" class="bar-icon">
      <img :src="globalProperties.getAssetsFile('/icon.png')" alt="" />
      拖码
    </a-col>
    <a-col :span="16">
      <a-menu v-model="menuList" mode="horizontal">
        <a-menu-item v-for="item in menuList" :key="item.username">
          {{ item.username }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col :span="2">
      <a-popover overlay-class-name="popover">
        <template #content>
          <p
            v-for="item in configList"
            :key="item.id"
            class="popover-item"
            @click="handlePop(item)"
          >
            {{ item.label }}
          </p>
        </template>
        <div class="user-icon">
          <a-avatar
            size="large"
            :src="useCenter.avatar ? useCenter.avatar : ''"
          ></a-avatar>
          <p class="user-name">{{ useCenter.username }}</p>
        </div>
      </a-popover>
    </a-col>
  </a-row>
</template>
<style lang="scss" scoped>
.top-bar {
  font-size: $font-size;
  height: $tab-height;
  margin-left: $tab-margin;
  margin-right: $tab-margin;
  .bar-icon {
    @include flex;
    font-size: 30px;
    height: 100%;
    img {
      margin-right: $tab-gap;
    }
  }
  .ant-menu {
    @include background-color('background-color');
    border: none;
    @include color('color');
  }
  .user-icon {
    @include flex;
    height: 100%;
    &:hover {
      @include hover;
    }
    .user-name {
      margin-left: $tab-gap;
    }
  }
}
.popover {
  .popover-item {
    width: 100%;
    padding: 2.5px 5px;
    color: #333;
    &:hover {
      @include hover;
    }
  }
}
</style>
