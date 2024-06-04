<template>
  <div class="">
    <h1>watchEffect</h1>
    <p>現在水庫狀況：{{ water.alert }}</p>
    <p>現在的水溫是：{{ water.situation.temperature }}</p>
    <p>現在的水位是：{{ water.situation.height }}</p>
    <button @click="clickTemperature">點我改變水溫</button>
    <button @click="clickHeight">點我改變水位</button>
    <button @click="changAll">一起改變</button>
  </div>
</template>

<script setup>
import { reactive, watchEffect } from "vue";

const water = reactive({
  alert: "水位過低",
  situation: {
    temperature: 20,
    height: 50,
  },
});

const clickTemperature = () => {
  water.situation.temperature += 20;
};

const clickHeight = () => {
  water.situation.height += 20;
};

const changAll = () => {
  water.situation.temperature += 20;
  water.situation.height += 20;
};

watchEffect(() => {
  console.log("temperature", water.situation.temperature);
  console.log("height", water.situation.height);
  console.log("situation", water.situation);
  if (water.situation.height > 100 || water.situation.temperature > 50) {
    water.alert = "危險！！水位過高";
    console.log("temperature", water.situation.temperature);
    console.log("height", water.situation.height);
  }
});
</script>

<style scoped></style>
