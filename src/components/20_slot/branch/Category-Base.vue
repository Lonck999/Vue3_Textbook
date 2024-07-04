<template>
  <div class="category">
    <h2>{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps(["title"]);
</script>

<style scoped>
.category {
  background: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 200px;
  height: 300px;
}
h2 {
  background: orange;
  text-align: center;
}
</style>
