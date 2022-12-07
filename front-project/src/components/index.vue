<script setup lang="ts">
import { userInfo } from 'api/userInfo';
import Topbar from 'coms/navBar/topBar.vue';
import { styleStore } from '@/store/style';

// TODO:通过pinia持久化管理主题
const submit = () => {};
</script>
<template>
  <div class="main">
    <Topbar />
    <a-button type="primary" @click="submit">职业</a-button>
  </div>
</template>
<style lang="scss">
.main {
  @include background-color('background-color');
  @include color('color');
}
</style>
