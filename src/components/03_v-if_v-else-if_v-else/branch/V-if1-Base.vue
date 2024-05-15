<template>
  <div>
    <h1>v-if v-else-if v-else1 Base</h1>
    <h1 v-if="isLoggedIn">歡迎回來！</h1>
    <button @click="show">顯示/關閉</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(true);

const show = () => {
  isLoggedIn.value = !isLoggedIn.value;
};
</script>
