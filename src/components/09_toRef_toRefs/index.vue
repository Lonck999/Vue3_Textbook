<template>
  <div class="">
    <h2>toRefs</h2>
    <p>toRefs 可以將 reactive 返回的對象轉換為 refs 對象。</p>
    <p>這樣可以使得 reactive 返回的對象中的屬性可以被單獨引用。</p>
    <p>count: {{ count }}</p>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <button @click="increment">Increment Count</button>
  </div>
</template>

<script setup>
import { reactive, toRefs, toRef } from "vue";

const state = reactive({
  count: 0,
  name: "Joe",
  age: 18,
});

// 使用 toRef 將對象屬性轉換為 ref
const age = toRef(state, "age");

// 使用 toRefs 將對象屬性轉換為 refs
const { count, name } = toRefs(state);

const increment = () => {
  count.value++;
};
</script>

<style scoped></style>
