<template>
  <div>
    <h1>v-for1 Base</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
  <div>
    <div v-for="(value, name, index) in object" :key="index">
      {{ index + 1 }}. {{ name }}: {{ value }}
    </div>
  </div>
  <div>
    <ul v-for="num in 10" :key="num">
      <li>{{ num }}</li> 
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue";

const items = ref([
  { id: 1, text: "Vue.js" },
  { id: 2, text: "React.js" },
]);

const object = ref({ firstName: "John", lastName: "Doe" });
</script>
