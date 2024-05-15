<template>
  <div>
    <h1>v-binde2 多選項用法</h1>
    <!-- <img :src="imgUrl" :alt="imgAlt" /> -->
    <img v-bind="{ src: imgUrl, alt: imgAlt }" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const imgUrl = ref(
  "https://tailwindcss.com/_next/static/media/performance.dc827ecf.png"
);
const imgAlt = ref("Vue logo");
</script>

<style scoped></style>
