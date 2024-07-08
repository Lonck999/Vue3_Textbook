<template>
  <div class="movie">
    <h2>電影列表</h2>
    <slot :movie="movie"></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

let movie = ref("http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4");
</script>

<style scoped>
.movie {
  width: 200px;
  height: 300px;
  background: lightgreen;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
