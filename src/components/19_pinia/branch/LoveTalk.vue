<template>
  <div class="talk">
    <button @click="store.getLoveTalk">+1土味情話</button>
    <ul>
      <li v-for="t in talkList" :key="t.id">{{ t.content }}</li>
    </ul>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useLoveTalkStore } from "@/store/loveTalk.js";

const store = useLoveTalkStore();
const { talkList } = storeToRefs(store);

store.$subscribe((mutate, state) => {
  console.log("talkList數據有變化了", mutate, state);
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
  if (mutate.events.type === "add") {
    alert("土味情話新增成功");
  }
});
</script>

<style scoped>
.talk {
  background: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
