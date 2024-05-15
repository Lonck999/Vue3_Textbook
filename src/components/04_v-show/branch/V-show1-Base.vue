<template>
  <div class="content">
    <h1>v-show1 Base</h1>
    <div>
      <p v-show="isShow">現在你看到我了！</p>
    </div>
    <button @click="showTime">顯示/關閉</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);

function showTime() {
  isShow.value = !isShow.value;
}
</script>

<style scoped>
.content {
  width: 300px;
  height: 150px;

  div {
    width: 200px;
    height: 30px;
    background: darkturquoise;
  }
}
</style>
