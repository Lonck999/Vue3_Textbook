<template>
  <ul>
    <h1>v-for2 Advanced</h1>
    <li v-for="item in filteredItems" :key="item.id">
      {{ item.text }}
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from "vue";

const items = ref([
  { id: 1, text: "Vue.js", active: true },
  { id: 2, text: "React.js", active: false },
  { id: 3, text: "Angular.js", active: true },
]);
const filteredItems = computed(() => {
  return items.value.filter((item) => item.active);
});
</script>
