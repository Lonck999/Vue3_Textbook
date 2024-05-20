<template>
    <h1>v-on2 Advanced</h1>
  <input
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    @focus="onFocus"
    :placeholder="text"
  />
</template>

<script setup>
import { ref } from "vue";

const text = ref("");

const onMouseOver = () => {
  text.value = "你來了喔！！！(*´▽`*)";
};

const onMouseLeave = () => {
  text.value = "要走了喔！！！｡ﾟヽ(ﾟ´Д`)ﾉﾟ｡";
};

const onFocus = () => {
  text.value = "點屁喔！#ﾟÅﾟ）⊂彡☆))ﾟДﾟ)･∵";
};
</script>
