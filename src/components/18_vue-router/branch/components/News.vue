<template>
  <div class="news">
    <ul>
      <li><a href="">新聞01</a></li>
      <li><a href="">新聞02</a></li>
      <li><a href="">新聞03</a></li>
      <li><a href="">新聞04</a></li>
      <li><a href="">新聞05</a></li>
    </ul>
  </div>
</template>

<script setup>
import {} from "vue";
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
  list-style: none;
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
