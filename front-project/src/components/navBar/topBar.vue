<script setup lang="ts">
import { userStore } from '@/store/user';
import { configList, config } from './configList';

const user = userStore();
const current = ref([0]);
const useCenter = reactive({
  avatar: user.getInfo?.avatar,
  username: user.getName
});
const menuList = ref([{ id: 0, label: '首页', path: '/' }]);
const handlePop = (item: config) => {
  item.method ? item.method() : '';
};
</script>
<template>
  <a-row class="top-bar">
    <a-col :offset="6" :span="16">
      <a-menu v-model="menuList" :selected-keys="current" mode="horizontal">
        <a-menu-item v-for="item in menuList" :key="item.id">
          {{ item.label }}
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
  padding-left: $tab-span;
  padding-right: $tab-span;
  @include change-back-transition;
  @include theme_property((background-color, color, box-shadow));

  .ant-menu {
    @include theme_property((background-color, color));
    @include change-back-transition;
    border: none;
    height: $tab-height;
    align-items: center;
  }
  .user-icon {
    @include flex;
    height: 100%;
    @include transition(color);
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
    @include transition(color);
    &:hover {
      @include hover;
    }
  }
}
</style>
