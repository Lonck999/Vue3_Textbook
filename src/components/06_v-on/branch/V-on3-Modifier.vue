<template>
    <h1>v-on3 Modifier</h1>
    <!-- 阻止默認行為 -->
    <form v-on:submit.prevent="onSubmit">
      <button type="submit">提交</button>
    </form>
    <!-- 停止事件傳播 -->
    <div v-on:click.stop="divClicked">
      <button v-on:click="btnClicked">點擊我</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const onSubmit = (event) => {
    alert('表單已提交！');
  };
  
  const divClicked = () => {
    alert('DIV 被點擊！');
  };
  
  const btnClicked = () => {
    alert('按鈕被點擊！');
  };
  </script>
  