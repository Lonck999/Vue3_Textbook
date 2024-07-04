<template>
  <div class="father">
    <h3>父層</h3>
    <input type="text" v-model="username" />
    <Test v-model="username" />
  </div>
</template>

<script setup>
import Test from "./Test.vue";
import { ref } from "vue";

const username = ref("父層的");
</script>

<style scoped>
.father {
  background: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
