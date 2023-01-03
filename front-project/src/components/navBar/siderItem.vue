<script setup lang="ts">
defineProps<{ item: meta }>();
</script>

<template>
  <a-sub-menu v-if="item.children && item.children.length > 0">
    <template #title>{{ item.label }}</template>
    <a-menu-item v-for="(child, index) in item.children" :key="index">
      {{ child.label }}
    </a-menu-item>
  </a-sub-menu>
  <a-menu-item v-else>{{ item.label }}</a-menu-item>
</template>

<style lang="scss" scoped></style>
