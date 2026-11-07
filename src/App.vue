<script setup lang="ts">
import { ref } from 'vue'

const players = ref<{ name: string; territory: number; color: string }[]>([
  { name: 'name', territory: 14, color: 'black' },
  { name: 'blue', territory: 14, color: 'blue' },
  { name: 'name', territory: 14, color: 'red' },
  { name: 'name', territory: 14, color: 'green' },
  { name: 'name', territory: 14, color: 'yellow' },
])

const plus = (index: number) => {
  if (players.value.length < 0) {
    return
  }
  if (players.value[index] != undefined) {
    players.value[index].territory++
  }
}
const minus = (index: number) => {
  if (players.value.length < 0) {
    return
  }
  if (players.value[index] != undefined) {
    players.value[index].territory--
  }
}
</script>

<template>
  <div class="main flex flex-col gap-8 justify-center items-center">
    <div class="flex gap-4 justify-center items-center">
      <div v-for="(player, index) in players" class="player" :class="`${player.color}`">
        <button class="button rotate-180" @click="plus(index)">v</button>
        <h1>{{ player.territory }}</h1>
        <p>{{ Math.floor(player.territory / 3) }}</p>
        <button class="button" @click="minus(index)">v</button>
      </div>
    </div>
    <div class="flex gap-8">
      <button class="btn">Add a player</button>
      <button class="btn">Remove a player</button>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
}

.main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100svh;
}

.player {
  height: 80svh;
  width: 16rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
}

.blue {
  background-color: #383acf;
}
.green {
  background-color: #3acf38;
}
.red {
  background-color: #cf383a;
}
.black {
  background-color: #282828;
}
.yellow {
  background-color: #cfcf11;
}

.button {
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 6rem;
  aspect-ratio: 1/1;
  border-radius: 2rem;
}
.button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.btn {
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  width: fit-content;
  border-radius: 1rem;
}
.btn:hover {
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
</style>
