<template>
  <div class="child">
    <h3>子組件</h3>
    <p>玩具：{{ toy }}</p>
    <!-- 寫法一 -->
    <button @click="sendUpdate">給老爸玩具</button>
    <!-- 寫法二 -->
    <button @click="emit('get-change-toy2', toy2)">給老爸玩具2</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toy = ref("兒子的奧特曼");
const toy2 = ref("兒子的假面騎士");
const emit = defineEmits(["get-change-toy", "get-change-toy2"]);

const sendUpdate = () => {
  emit("getChangeToy", toy.value);
};
</script>

<style scoped>
.child {
  margin-top: 10px;
  background: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
