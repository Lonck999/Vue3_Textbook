<template>
  <div class="food">
    <h1>美食專區</h1>
    <slot :food="food"></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

let food = ref("https://z1.ax1x.com/2023/11/19/piNxLo4.jpg");
</script>

<style scoped>
.food {
  width: 200px;
  height: 300px;
  background: lightgreen;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
