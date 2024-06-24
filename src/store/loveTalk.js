import { defineStore } from "pinia";
import axios from "axios";
import { reactive } from "vue";

export const useLoveTalkStore = defineStore("loveTalk", () => {
  const talkList = reactive([
    { id: 1, content: "你是一隻可愛的小豬豬" },
    { id: 2, content: "你是一隻可愛的小狗狗" },
    { id: 3, content: "你是一隻可愛的小貓貓" },
  ]);

  async function getLoveTalk() {
    // 正常寫法
    // let result = await axios.get(
    //   "https://api.uomg.com/api/rand.qinghua?format=json"
    // );
    // talkList.push({ id: talkList.length + 1, content: result.data.content });

    // 解構寫法
    let {
      data: { content },
    } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
    let obj = { id: talkList.length + 1, content };
    talkList.push(obj);
    console.log(obj);
  }

  return { talkList, getLoveTalk };
});
