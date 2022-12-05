<script setup lang="ts">
import { userInfo } from 'api/userInfo';
import Topbar from 'coms/navBar/topBar.vue';

const submit = async () => {
  await userInfo();
};
</script>
<template>
  <a-button type="primary" @click="submit">职业</a-button>
  <Topbar />
</template>
