<template>
        <Base />
        <hr>
        <Advanced />
        <hr>
        <Class />
        <hr>
        <Style />
        <hr>
        <Prpos :user="user" />
</template>
    
<script setup>
import Base from './branch/V-bind1-Base.vue';
import Advanced from './branch/V-bind2-Advanced.vue';
import Class from './branch/V-bind3-class.vue';
import Style from './branch/V-bind4-style.vue';
import Prpos from './branch/V-bind5-props.vue';
import { ref } from 'vue';
const user = ref({ name: 'John', age: 30 });
</script>