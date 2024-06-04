<template>
  <div class="">
    <h1>Lifecycle 生命週期</h1>
    <h2>當前求和為：{{ sum }}</h2>
    <button @click="add">每次加一</button>
  </div>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const sum = ref(0);

const add = () => {
  sum.value++;
};

//創建時
console.log("創建時");

//載入
onBeforeMount(() => {
  console.log("載入前");
});

onMounted(() => {
  console.log("載入完畢");
});

//更新
onBeforeUpdate(() => {
  console.log("更新前");
});

onUpdated(() => {
  console.log("更新完畢");
});

//卸載
onBeforeUnmount(() => {
  console.log("卸載前");
});

onUnmounted(() => {
  console.log("卸載完畢");
});
</script>

<style scoped></style>
