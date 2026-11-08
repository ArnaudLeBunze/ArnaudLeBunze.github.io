<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
