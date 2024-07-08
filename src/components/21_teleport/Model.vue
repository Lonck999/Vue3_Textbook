<template>
  <button @click="showModel = true">展示彈窗</button>
  <teleport to="body">
    <div class="model" v-show="showModel">
      <h2>我是彈窗標題</h2>
      <p>我是彈窗內容</p>
      <button @click="showModel = false">關閉彈窗</button>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";

const showModel = ref(false);
</script>

<style scoped>
.model {
  width: 150px;
  height: 150px;
  background: skyblue;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}
</style>
