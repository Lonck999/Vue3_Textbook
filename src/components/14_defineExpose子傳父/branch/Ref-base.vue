<template>
  <div class="">
    <h1>DefineExpose</h1>
    <h1>{{ h1 }}</h1>
    <h2 ref="refH2">{{ h2 }}</h2>
    <h3>{{ h3 }}</h3>
    <button @click="showLog">展示抓取到的值</button>
    <button @click="add">加上很多的驚嘆號</button>
  </div>
</template>

<script setup>
import { ref, defineExpose } from "vue";

const h1 = ref("台灣");
const h2 = ref("台北，子給父的東西");
const h3 = ref("大安區");

// 創建一個ref，用於存儲ref標記的內容
const refH2 = ref();

const showLog = () => {
  console.log("ref標籤", refH2.value);
};

const add = () => {
  h1.value += "!";
  h2.value += "!";
  h3.value += "!";
};

defineExpose({
  h2,
  h3,
});
</script>

<style scoped></style>
