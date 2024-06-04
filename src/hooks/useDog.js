import { reactive } from "vue";
import axios from "axios";

// 向外部暴露一個函數
export default function useDog() {
  const dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_7243.jpg",
  ]);

  async function getDog() {
    try {
      const res = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      );
      dogList.push(res.data.message);
      console.log(dogList);
    } catch (error) {
      alert("獲取狗狗失敗");
    }
  }

  return {
    dogList,
    getDog,
  };
}
