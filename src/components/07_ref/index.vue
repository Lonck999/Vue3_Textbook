<template>
  <div>
    <h1>ref()</h1>
    <div>現在總數：{{ state.count }}</div>
    <button @click="add">+1</button>
    <div>
      <input v-model="inputRef" />
      <button @click="focusInput">Focus Input</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const state = ref({
  count: 0,
  message: "Hello",
});
const inputRef = ref("222");

const add = () => {
  state.value.count++;
};

function focusInput() {
  inputRef.value += "!";
  console.log(inputRef.value);
}
</script>
