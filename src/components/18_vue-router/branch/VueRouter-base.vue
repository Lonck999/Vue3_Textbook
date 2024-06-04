<template>
  <div class="app">
    <h1>Base</h1>
    <h2 class="title">Vue入由測試</h2>
    <div class="navigate">
      <RouterLink to="/home">首頁</RouterLink>
      <RouterLink to="/news">新聞</RouterLink>
      <RouterLink to="/about">關於</RouterLink>
    </div>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<style scoped>
.title {
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg, gray, white);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-size: 30px;
}

.navigate {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin: 0 100px;
}

.navigate a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.navigate a:active {
  background: #64967e;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid gray;
}
</style>
