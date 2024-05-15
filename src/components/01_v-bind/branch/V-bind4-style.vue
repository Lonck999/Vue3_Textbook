<template>
    <h1>v-binde4 style</h1>
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
    1213213
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeColor = ref('red');
const fontSize = ref(30);
</script>
