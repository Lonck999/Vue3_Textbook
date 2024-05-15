<template>
  <div>
    <h1>v-model1 Base</h1>
    <input v-model="inputContent" placeholder="Enter your message">
    <hr>
    <textarea v-model="textareaContent"></textarea>
    <hr>
    <select v-model="selectedOption">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <hr>
    <p>The message is: {{ inputContent }}</p>
    <p>The description is: {{ textareaContent }}</p>
    <p>Your option: {{ selectedOption }}</p>
    <hr>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputContent = ref('');
const textareaContent = ref('');
const selectedOption = ref('');
</script>
