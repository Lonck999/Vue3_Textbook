<template>
  <div>
    <h1>Computed-Advanced</h1>
    <p>1 日幣 = 0.269 台幣</p>
    <div>日幣 <input type="text" v-model="jpy" /></div>
    <div>台幣 <input type="text" v-model="twd" /></div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const jpy = ref(0);

// 定義可讀寫的計算屬性
const twd = computed({
  // 返回template顯示的部分
  get() {
    return jpy.value * 0.269;
  },
  // 更新template顯示的部分
  set(newTwd) {
    jpy.value = newTwd / 0.269;
  },
});
</script>
