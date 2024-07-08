<template>
  <div class="game">
    <h2>遊戲列表</h2>
    <slot :games="games"></slot>
  </div>
</template>

<script setup>
import { reactive } from "vue";

let games = reactive([
  {
    id: 1,
    name: "LOL",
  },
  {
    id: 2,
    name: "PUBG",
  },
  {
    id: 3,
    name: "Minecraft",
  },
]);
</script>

<style scoped>
.game {
  width: 200px;
  height: 300px;
  background: lightgreen;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h2 {
  background: orange;
  text-align: center;
}
</style>
