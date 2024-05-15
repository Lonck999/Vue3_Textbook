<template>
  <div>
    <h1>v-binde1 基本用法</h1>
    <img :src="imgUrl" :alt="imgAlt" />
  </div>
</template>

<script setup>
import {ref} from "vue";

const imgUrl = ref("https://tailwindcss.com/_next/static/media/performance.dc827ecf.png");
const imgAlt = ref("Vue logo");
</script>
