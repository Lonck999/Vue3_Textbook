<template>
  <div class=""><input type="text" v-model="sonGet" /></div>
  <button @click="add">多～</button>
</template>

<script setup>
const sonGet = defineModel();

const add = () => {
  sonGet.value += "～";
};
</script>

<style scoped>
input {
  border: 2px solid #000;
  background: linear-gradient(45deg, #f3ec78, #af4261);
  height: 30px;
  font-size: 16px;
  color: aliceblue;
}
</style>
