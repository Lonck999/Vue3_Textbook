<template>
  <h1>DefineExpose子傳父</h1>
  <div>{{ sonRefH2 }}</div>
  <div v-if="sonH3">{{ sonH3 }}</div>
  <div v-else>現在為空值</div>
  <button @click="showSonLog">展示抓取到子給父的值</button>
  <div class="">
    <Base ref="refH2" />
  </div>
</template>

<script setup>
import Base from "./branch/Ref-base.vue";
import { ref } from "vue";

const refH2 = ref();
const sonRefH2 = ref();
const sonH3 = ref();

const showSonLog = () => {
  console.log("refH2標籤", refH2.value.refH2);
  console.log("ref標籤", refH2.value.h3);
  sonRefH2.value = refH2.value.h2;
  sonH3.value = refH2.value.h3;
};
</script>

<style scoped></style>
