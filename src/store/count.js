import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCountStore = defineStore("count", () => {
  const sum = ref(1);
  const n = ref(1);

  function add() {
    sum.value += n.value;
  }

  function minus() {
    sum.value -= n.value;
  }

  function increment(value) {
    sum.value += value;
    if (sum.value > 10) {
      sum.value = 0;
    }
  }

  const bigSum = computed(() => sum.value * 10);

  return { sum, n, add, minus, increment, bigSum };
});
