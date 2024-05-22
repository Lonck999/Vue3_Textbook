<template>
  <div>
    <p>Filter: {{ filter }}</p>
    <ul>
      <li v-for="item in filteredItems" :key="item.name">{{ item.name }}</li>
    </ul>
    <button @click="filter = 'Vegetable'">Show Vegetables</button>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const items = reactive([
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
]);
const filter = ref("Fruit");

// 定義計算屬性
const filteredItems = computed(() => {
  return items.filter((item) => item.category === filter.value);
  // 返回items過濾後，這個新的值裡面只有category等於filter的值
});
</script>
