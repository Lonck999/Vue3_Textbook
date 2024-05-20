<template>
  <input v-on:keyup.enter="onEnter" />
  <button v-on:[dynamicEvent]="handleEvent">點擊我</button>
</template>

<script setup>
import { ref } from "vue";

const onEnter = () => {
  alert("按下 Enter 鍵！");
};

              const dynamicEvent = ref("click");
const handleEvent = () => {
  alert("處理動態事件！");
};
</script>
