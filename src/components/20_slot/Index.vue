<template>
  <div class="">
    <h1>slot-基礎用法</h1>
    <FatherBase />
    <h1>具名插槽</h1>
    <FatherSigned />
    <h1>作用域插槽</h1>
    <FatherScope />
  </div>
</template>

<script setup>
import FatherBase from "./branch/Father-Base.vue";
import FatherSigned from "./branch/Father-Signed.vue";

import FatherScope from "./branch/Father-Scope.vue";
</script>

<style scoped></style>
