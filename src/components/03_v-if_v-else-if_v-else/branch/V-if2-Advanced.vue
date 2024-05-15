<template>
  <div class="">
    <h1>v-if v-else-if v-else2 Advanced</h1>
    <p v-if="sum === 1">這是一</p>
    <p v-else-if="sum === 2">這是二</p>
    <p v-else>這是三</p>
    <button @click="show">顯示</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sum = ref(1);

const show = () => {
  sum.value++;
  if (sum.value > 3) {
    sum.value = 1;
  }
};
</script>

<style scoped></style>
