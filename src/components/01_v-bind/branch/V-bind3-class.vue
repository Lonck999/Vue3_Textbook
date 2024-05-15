<template>
    <h1>v-binde3 class</h1>
  <div :class="{ active: isActive, 'text-danger': hasError }">
    123
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(true);
const hasError = ref(false);
</script>

<style scoped>
.active {
  color: green;
  font-size: 30px;
}
</style>

