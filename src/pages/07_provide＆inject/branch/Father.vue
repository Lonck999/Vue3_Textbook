<template>
  <div class="father">
    <h3>父層</h3>
    <h4>父層的資產: {{ money }}</h4>
    <h4>父層的車子: {{ car.brand }}，價值：{{ car.price }}</h4>
    <Child />
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import { provide, ref, reactive } from "vue";

let money = ref(1000000000);
let car = reactive({
  brand: "爸爸的Toyota",
  color: "red",
  price: 1000000,
});

function changeMoney() {
  money.value -= 1000;
}

// 提供資產和車子給子層跟孫層
// provide('傳入的名稱', '要提供的值');
provide("money", { money, changeMoney });
provide("car", car);
</script>

<style scoped>
.father {
  margin-top: 20px;
  background: lightcoral;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
