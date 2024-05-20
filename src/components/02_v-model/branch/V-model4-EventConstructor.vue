<template>
  <div class="">
    <h2>Event Constructor</h2>
    <p>子層</p>
    <input type="text" :value="value" @input="propsInput" />
    <input type="checkbox" :checked="change" @change="propsChange" />
    <p>{{ change }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const { value, change } = defineProps(["value", "change"]);

const propsInput = (e) => {
  value.value = e.target.value;
};

const propsChange = (e) => {
  change.value = e.target.checked;
};
</script>
