<template>
  <div class="child">
    <h3>子組件</h3>
    <p>玩具：{{ toy }}</p>
    <p>得到的物品：{{ car }}</p>
    <button @click="getSonToy(toy)">送父親玩具</button>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

let toy = ref("兒子的奧特曼");
let toy2 = ref("兒子的假面騎士");
defineProps(["car", "getSonToy"]);

defineExpose({ toy2 });
</script>

<style scoped>
.child {
  background: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
