<template>
  <div class="">
    <h1>Watch-Base</h1>
    <p>總和：{{ sum }}</p>
    <p>{{ ps }}</p>
    <button @click="clickAdd">點我加1</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const sum = ref(0);
const ps = ref("");

const clickAdd = () => {
  sum.value++;
};

// watch(監聽的值,(新的值, 舊的值) => {監聽到變化後的行為}, { immediate: 是否要立即執行, deep: 是否要深度監聽 })
watch(
  sum,
  (newVal, oldVal) => {
    console.log("newVal:", newVal);
    console.log("oldVal:", oldVal);
    newVal > 5 ? (ps.value = "大於5") : (ps.value = "小於5");
  },
  { immediate: true }
);
</script>

<style scoped></style>
