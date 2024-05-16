<template>
  <div class="content">
    <div>
      <VBind />
    </div>
    <div>
      <VModel />
    </div>
    <div>
      <VIf />
    </div>
    <div>
      <VShow />
    </div>
    <div>
      <VFor />
    </div>
  </div>
</template>

<script setup>
import VBind from "./components/01_v-bind/index.vue";
import VModel from "./components/02_v-model/index.vue";
import VIf from "./components/03_v-if_v-else-if_v-else/index.vue";
import VShow from "./components/04_v-show/index.vue";
import VFor from "./components/05_v-for/index.vue";
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-around;
}
</style>
