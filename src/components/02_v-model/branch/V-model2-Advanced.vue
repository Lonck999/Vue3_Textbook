<template>
  <div>
    <h1>v-model2 Advanced</h1>
    <div class="content">
      <!-- Radio buttons -->
      <input type="radio" v-model="picked" value="One" />
      <label for="one">One</label>
      <input type="radio" v-model="picked" value="Two" />
      <label for="two">Two</label>

      <!-- Checkbox -->
      <input type="checkbox" v-model="checked" />
      <label for="checkbox">Check me</label>

      <!-- Multiple checkboxes bound to the same array -->
      <input type="checkbox" v-model="checkedNames" value="Alice" />
      <label for="Alice">Alice</label>
      <input type="checkbox" v-model="checkedNames" value="Bob" />
      <label for="Bob">Bob</label>
      <input type="checkbox" v-model="checkedNames" value="Charlie" />
      <label for="Charlie">Charlie</label>
    </div>
    <hr />

    <p>Picked: {{ picked }}</p>
    <p>Checked: {{ checked }}</p>
    <p>Checked names: {{ allcheckedNames }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const picked = ref("");
const checked = ref(false);
const checkedNames = ref([]);
const allcheckedNames = computed(() => checkedNames.value.join(", "));
</script>

<style scoped>
.content {
  display: grid;
    grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  align-items: center;
}
</style>
