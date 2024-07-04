<template>
  <div class="father">
    <h3>父組件</h3>
    <h4>a:{{ a }}</h4>
    <h4>b:{{ b }}</h4>
    <h4>c:{{ c }}</h4>
    <h4>d:{{ d }}</h4>
    <Child :a="a" :b="b" :c="c" :d="d" />
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import { ref } from "vue";

const a = ref("爸爸的1");
const b = ref("爸爸的2");
const c = ref("爸爸的3");
const d = ref("爸爸的4");
</script>

<style scoped>
.father {
  margin-top: 20px;
  background: lightcoral;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
