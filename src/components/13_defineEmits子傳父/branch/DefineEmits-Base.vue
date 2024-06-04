<template>
  <div class="content">
    <h2>子層</h2>
    <p>{{ sum }}</p>
    <button @click="sendUpdate">Send Update</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const sum = ref("兒子給的");

const emit = defineEmits(["update"]);

function sendUpdate() {
  sum.value += "!";
  emit("update", sum.value);
}
</script>

<style scoped>
.content {
  border: 1px solid #000;
  padding: 10px;
}
</style>
