<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一種寫法 -->
        <!-- <RouterLink
          :to="`/detail-params/${news.id}/${news.title}/${news.content}`"
          >{{ news.title }}</RouterLink
        > -->
        <!-- 第二種寫法 -->
        <!-- <router-link
          :to="{
            name: 'newsDetailParams',
            params: { id: news.id, title: news.title, content: news.content },
          }"
          >{{ news.title }}</router-link
        > -->
        <!-- 第三種寫法 -->
        <router-link
          :to="{
            name: 'newsDetailParams',
            params: { news },
          }"
          >{{ news.title }}</router-link
        >
      </li>
    </ul>
    <div class="news-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { RouterView } from "vue-router";

const newsList = reactive([
  { id: 1, title: "新聞01", content: "新聞01的內容" },
  { id: 2, title: "新聞02", content: "新聞02的內容" },
  { id: 3, title: "新聞03", content: "新聞03的內容" },
  { id: 4, title: "新聞04", content: "新聞04的內容" },
  { id: 5, title: "新聞05", content: "新聞05的內容" },
]);
</script>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  padding-left: 10px;
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967e;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid #000;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
