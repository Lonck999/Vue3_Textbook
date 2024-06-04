<template>
  <div class="">
    <h2>DefineProps</h2>
    <h2>這是子層</h2>
    <div v-for="person in persons.p" :key="person.name">
      <p>{{ person.from }}</p>
      <p>{{ person.name }}</p>
      <p>{{ person.age }}</p>
    </div>
  </div>
</template>

<script setup>
const persons = defineProps(["p"]);
console.log("qwe", persons);
</script>

<style scoped></style>
