<template>
  <div class="">
    <h1>Watch-Advanced</h1>
    <p>姓名：{{ person.name }}</p>
    <p>年齡：{{ person.age }}</p>
    <p>車子1：{{ person.car.car1 }}</p>
    <p>車子2：{{ person.car.car2 }}</p>
    <p>車子3：{{ person.car.car3 }}</p>
    <button @click="clickName">點我改變名字</button>
    <button @click="clickAge">點我改變年齡</button>
    <button @click="clickCar">點我改變車</button>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

const person = reactive({
  name: "小明",
  age: 18,
  car: {
    car1: "Toyota",
    car2: "Benz",
    car3: "BMW",
  },
});

const clickName = () => {
  person.name += "~";
};

const clickAge = () => {
  person.age += 2;
};

const clickCar = () => {
  person.car.car1 += "!";
  person.car.car2 += "!";
  person.car.car3 += "!";
};

watch(
  () => person.name,
  (newVal, oldVal) => {
    console.log("newVal:", newVal);
    console.log("oldVal:", oldVal);
  },
  { immediate: true, deep: true }
);
</script>

<style scoped></style>
