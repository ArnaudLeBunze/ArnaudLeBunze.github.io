<script setup lang="ts">
import routes from '@/router/routes'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col gap-8">
    <RouterLink v-for="route in routes" :to="route.path">{{ route.name }}</RouterLink>
  </div>
</template>

<style scoped></style>
