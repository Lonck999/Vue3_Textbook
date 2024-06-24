<template>
  <ul class="news-list">
    <li>編號：{{ route.params.id }}</li>
    <li>標題：{{ route.params.title }}</li>
    <li>內容：{{ route.params.content }}</li>
  </ul>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>
