<template>
    <h1>v-on1 Base</h1>
    <button v-on:click="greet">點擊我</button>
  </template>
  
  <script setup>
  const greet = () => {
    alert('你好！');
  };
  </script>
  