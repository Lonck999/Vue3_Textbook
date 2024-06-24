<template>
  <div class="count">
    <h2>當前求和爲:{{ sum }}</h2>
    <h2>大和爲:{{ bigSum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button @click="add">+++</button>
    <button @click="minus">---</button>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCountStore } from "@/store/count.js";

const store = useCountStore();
const { sum, n, bigSum } = storeToRefs(store);
// 解構add、minus方法
const { add, minus } = store;
</script>

<style scoped>
.count {
  background: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

select,
button {
  margin: 0 10px;
  height: 30px;
}
</style>
