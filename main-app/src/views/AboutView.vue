<template>
  <div class="about">
    <micro-app name="child-app" url="http://localhost:3000/" iframe></micro-app>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
