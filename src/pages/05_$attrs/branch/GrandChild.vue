<template>
  <div class="grand-child">
    <h3>孫組件</h3>
    <h4>孫子的財產：</h4>
    <h4>a:{{ a }}</h4>
    <h4>b:{{ b }}</h4>
    <h4>c:{{ c }}</h4>
    <h4>d:{{ d }}</h4>
  </div>
</template>

<script setup>
import {} from "vue";
defineProps(["a", "b", "c", "d"]);
</script>

<style scoped>
.grand-child {
  margin-top: 20px;
  background: lightgreen;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
