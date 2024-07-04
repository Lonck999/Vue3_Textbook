<template>
  <div class="child">
    <h3>子層</h3>
    <h4>也是可以拿到父層的車子: {{ car.brand }}，價值：{{ car.price }}</h4>
    <GrandChild />
  </div>
</template>

<script setup>
import GrandChild from "./GrandChild.vue";
import { inject } from "vue";

const car = inject("car");
</script>

<style scoped>
.child {
  margin-top: 20px;
  background: skyblue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
