<template>
  <div class="">
    <h1>Computed-Base</h1>
    <p>原本的數字：{{ num }}</p>
    <p>乘2的數字：{{ doubleNum }}</p>
    <button @click="clickAdd">魔法小按鈕</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const num = ref(1);

const clickAdd = () => {
  num.value++;
};

const doubleNum = computed(() => num.value * 2);
</script>

<style scoped></style>
