<template>
  <div class="">
    <Base />
    <Advanced />
    <Modifier />
    <div class="eventConstructor">
      <p>父層</p>
      <input type="text" v-model="value" /><br />
      <input type="checkbox" v-model="change" />
      <!-- <EventConstructor :value="value" @input="value = $event" /> -->
        <EventConstructor v-model:value="value" v-model:change="change" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Base from "./branch/V-model1-Base.vue";
import Advanced from "./branch/V-model2-Advanced.vue";
import Modifier from "./branch/V-model3-Modifier.vue";
import EventConstructor from "./branch/V-model4-EventConstructor.vue";

const change = ref(true);
const value = ref("父親給的");
</script>

<style scoped>
.eventConstructor {
  border: 1px solid #000;
}
</style>
