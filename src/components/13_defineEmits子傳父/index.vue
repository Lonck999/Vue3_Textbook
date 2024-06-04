<template>
  <div>
    <h1>DefineEmits</h1>
    <p>父層</p>
    <p>{{ message }}</p>
    <Base @update="handleUpdate" />
  </div>
</template>

<script setup>
import Base from "./branch/DefineEmits-Base.vue";
import { ref } from "vue";

const message = ref("");

function handleUpdate(newMessage) {
  message.value = newMessage;
}
</script>
