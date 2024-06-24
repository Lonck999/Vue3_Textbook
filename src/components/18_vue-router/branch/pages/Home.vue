<template>
  <div class="home">
    <h2>這是首頁拉～～～～～～</h2>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";

//全局
const router = useRouter();

// 三秒後跳轉到 news 頁面
onMounted(() => {
  setTimeout(() => {
    router.push({ name: "news" }); // 不管是寫 name 還是 path 都可以
  }, 3000);
});
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
