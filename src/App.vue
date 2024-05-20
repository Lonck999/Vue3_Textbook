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
    <div>
      <VOn />
    </div>
    <div>
      <Ref />
    </div>
  </div>
</template>

<script setup>
import VBind from "./components/01_v-bind/index.vue";
import VModel from "./components/02_v-model/index.vue";
import VIf from "./components/03_v-if_v-else-if_v-else/index.vue";
import VShow from "./components/04_v-show/index.vue";
import VFor from "./components/05_v-for/index.vue";
import VOn from "./components/06_v-on/index.vue";
import Ref from "./components/07_ref/index.vue";
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}
</style>
