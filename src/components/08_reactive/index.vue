<template>
  <div class="">
    <h1>reactive()</h1>
    <div>現在總數：{{ state.count }}</div>
    <div>姓名：{{ state.user.name }}</div>
    <div>年齡：{{ state.user.age }}</div>
    <button @click="add">+1</button><br />
    <button @click="addName">姓名＋！</button><br />
    <button @click="addAge">年齡 +1</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  count: 0,
  user: {
    name: "John",
    age: 30,
  },
});

function add() {
  state.count++;
}

function addName() {
  state.user.name += "!";
}

function addAge() {
  state.user.age++;
}
</script>

<style scoped></style>
