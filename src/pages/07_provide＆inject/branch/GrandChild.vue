<template>
  <div class="grand-child">
    <h3>孫層</h3>
    <div>
      <h4>祖傳的資產: {{ money }}</h4>
      <h4>祖傳的車子: {{ car.brand }}，價值：{{ car.price }}</h4>
    </div>
    <button @click='changeMoney'>花爺爺的錢</button>
  </div>
</template>

<script setup>
import { inject } from "vue";

// 取得祖傳的資產和車子
// inject('接收傳入的名稱', '預設值');
const { money,changeMoney } = inject("money");
const car = inject("car");
</script>

<style scoped>
.grand-child {
  margin-top: 20px;
  background: lightgreen;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
