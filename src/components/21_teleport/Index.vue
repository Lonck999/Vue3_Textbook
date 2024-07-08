<template>
  <div class="outer">
    <h1>Teleport</h1>
    <h2>我是APP組件</h2>
    <img
      src="https://static-00.iconduck.com/assets.00/vue-icon-2048x1766-ntogpmti.png"
      alt=""
    />
    <br />
    <Model />
  </div>
</template>

<script setup>
import Model from "./Model.vue";
</script>

<style scoped>
.outer {
  background-color: #ddd;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 400px;
  height: 400px;
}

img {
  width: 100px;
}
</style>
