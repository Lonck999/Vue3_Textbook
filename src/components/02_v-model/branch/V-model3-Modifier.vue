<template>
  <div class="">
    <h2>v-model3 Modifier</h2>
    <input v-model.lazy='lazy' placeholder=""/>
    <input v-model.number='number' type="number" placeholder=""/>
    <input v-model.trim='trim' placeholder=""/>
    <hr>
    <p>lazy: {{ lazy }}</p>
    <p>number: {{ number }}</p>
    <p>trim: {{ trim }}</p>
    <hr>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const lazy = ref('')
const number = ref('')
const trim = ref('')
</script>

<style scoped></style>