<template>
  <div class="home">
    <!-- vue3没有指定必须要一个根标签 -->
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 使用注册的组件 -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
// 表示可以使用ts代码

// defineComponent函数的目的是定义一个组件，内部可以传入一个配置对象
import { defineComponent } from 'vue';
// 引入注册的组件
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// 暴露出定义好的组件
export default defineComponent({
  // 当前组件的名字
  name: 'Home',
  components: {
    // 注册一个组件
    HelloWorld,
  },
});
</script>
