<template>
  <div>
    <h1>v-binde5 Props</h1>
    <p>propsName: {{ name }}</p>
    <p>propsAge: {{ age }}</p>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
// 接收父组件傳遞的props
const props = defineProps(["user"]);
// const name = ref(props.user.name);
// const age = ref(props.user.age);

// 透過toRefs解構props
const { name, age } = toRefs(props.user);

</script>

<style></style>
