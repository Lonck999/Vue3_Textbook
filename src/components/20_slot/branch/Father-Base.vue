<template>
  <div class="father">
    <h3>父組件</h3>
    <div class="content">
      <Category title="熱門遊戲列表">
        <ul>
          <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
      </Category>
      <Category title="今日城市美食">
        <img :src="food" alt="food" />
      </Category>
      <Category title="今日電影推薦">
        <video :src="movie" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup>
import Category from "./Category-Base.vue";
import { ref, reactive } from "vue";

let games = reactive([
  {
    id: 1,
    name: "LOL",
  },
  {
    id: 2,
    name: "PUBG",
  },
  {
    id: 3,
    name: "Minecraft",
  },
]);

let food = ref("https://z1.ax1x.com/2023/11/19/piNxLo4.jpg");
let movie = ref("http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4");
</script>

<style scoped>
.father {
  background: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
}

img,
video {
  width: 100%;
}
</style>
