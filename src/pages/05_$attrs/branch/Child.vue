<template>
  <div class="child">
    <h3>子組件</h3>
    <GrandChild v-bind="$attrs" />
  </div>
</template>

<script setup>
import GrandChild from "./GrandChild.vue";
import {} from "vue";
</script>

<style scoped>
.child {
  margin-top: 20px;
  background: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
