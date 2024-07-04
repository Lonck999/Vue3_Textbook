<template>
  <div class="">
    <h1>slot-基礎用法</h1>
    <FatherBase />
    <h1>具名插槽</h1>
    <FatherSigned />
  </div>
</template>

<script setup>
import FatherBase from "./branch/Father-Base.vue";
import FatherSigned from "./branch/Father-Signed.vue";
</script>

<style scoped></style>
