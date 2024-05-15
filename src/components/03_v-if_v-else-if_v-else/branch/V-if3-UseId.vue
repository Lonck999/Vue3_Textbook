<template>
  <div>
    <h1>v-if v-else-if v-else3 UseID</h1>
    <input 
      v-if="loginType === 'username'" 
      key="username-input" 
      :style="inputStyle" 
      placeholder="Enter your username">
    <input 
      v-else 
      key="email-input" 
      :style="inputStyle" 
      placeholder="Enter your email">
  </div>
  <button @click="toggleLoginType">Toggle Login Type</button>
</template>

<script setup>
import { ref, computed } from 'vue';

const loginType = ref('username');

const inputStyle = computed(() => ({
  backgroundColor: loginType.value === 'username' ? 'lightblue' : 'lightgreen',
  color: loginType.value === 'username' ? 'darkblue' : 'darkgreen',
}));

function toggleLoginType() {
  loginType.value = loginType.value === 'username' ? 'email' : 'username';
}
</script>

<style>
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px 0;
  width: 100%;
  box-sizing: border-box;
}
</style>
