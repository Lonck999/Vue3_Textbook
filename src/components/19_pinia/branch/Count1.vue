<template>
  <div class="count">
    <h2>當前求和爲:{{ store.sum }}</h2>
    <select v-model.number="store.n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <button @click="add">+++</button>
    <button @click="store.minus">---</button>
  </div>
</template>

<script setup>
import { useCountStore } from "@/store/count.js";
const store = useCountStore();

function add() {
  // 第一種方式
  // store.sum += 1;
  // 第二種方式
  // store.$patch({ sum: 888, n: 999 });
  // 第三種方式
  store.increment(store.n);
}
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
