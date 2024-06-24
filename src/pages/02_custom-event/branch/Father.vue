<template>
  <div class="father">
    <h3>父組件</h3>
    <p>得到的玩具：{{ toy }}</p>
    <p>得到的玩具2：{{ toy2 }}</p>
    <Child @get-change-toy="fromChangeToy" @get-change-toy2="fromChangeToy2" />
  </div>
</template>

<script setup>
import Child from "./Child.vue";
import { ref } from "vue";

const toy = ref("");
const toy2 = ref("");

const fromChangeToy = (newToy) => {
  toy.value = newToy;
};

const fromChangeToy2 = (newToy2) => {
  toy2.value = newToy2;
};
</script>

<style scoped>
.father {
  background: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
