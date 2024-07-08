<template>
  <div class="father">
    <h3>父組件</h3>
    <div class="content">
      <Game>
        <template v-slot="getGame">
          <ul>
            <li v-for="g in getGame.games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Game>
      <Food>
        <template v-slot="{ food }">
          <img :src="food" alt="food" />
        </template>
      </Food>
      <Movie>
        <template v-slot="{ movie }">
          <video :src="movie" controls></video>
        </template>
      </Movie>
    </div>
  </div>
</template>

<script setup>
import Game from "./Game.vue";
import Food from "./Food.vue";
import Movie from "./Movie.vue";
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
