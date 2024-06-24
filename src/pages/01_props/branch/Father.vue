<template>
  <div class="father">
    <h3>父組件</h3>
    <p>汽車：{{ car }}</p>
    <p>得到的物品：{{ getToy }}</p>
    <p>得到的物品2：{{ getToy2.toy2 }}</p>
    <Child :car="car" :getSonToy="getSonToy" ref="getToy2" />
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import { ref } from "vue";

let car = ref("父親的BMW");
let getToy = ref("");
let getToy2 = ref("");

function getSonToy(toy) {
  getToy.value = toy;
}
</script>

<style scoped>
.father {
  background: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
