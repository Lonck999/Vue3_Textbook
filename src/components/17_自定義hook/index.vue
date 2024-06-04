<template>
  <div class="person">
    <h2>當前求和結果為：{{ sum }}</h2>
    <button @click="add">點我加1</button>
    <hr />
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
    <br />
    <button @click="getDog">再多一隻狗</button>
  </div>
</template>

<script setup>
import useDog from "@/hooks/useDog";
import useSum from "@/hooks/useSum";

// 使用自定義hook並解構賦值
const { sum, add } = useSum();
const { dogList, getDog } = useDog();
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5 px;
}

li {
  font-size: 20px;
}

img {
  width: 200px;
  margin-right: 10px;
}
</style>
