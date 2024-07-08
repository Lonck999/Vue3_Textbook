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
    <div>
      <Reactive />
    </div>
    <div>
      <ToRef />
    </div>
    <div>
      <Computed />
    </div>
    <div>
      <Watch />
    </div>
    <div>
      <WatchEffect />
    </div>
    <div>
      <DefineExpose />
    </div>
    <div>
      <DefineEmits />
    </div>
    <div>
      <h1>父傳子</h1>
      <div class="props">
        <h2>父層</h2>
        <p>{{ persons[0].from }}</p>
        <p>{{ persons[0].name }}</p>
        <p>{{ persons[0].age }}</p>
      </div>
      <DefineProps :p="persons" />
    </div>
    <div>
      <Lifecycle />
    </div>
    <div>
      <Hook />
    </div>
    <div>
      <Router />
    </div>
    <div>
      <Pinia />
    </div>
    <div>
      <Slot />
    </div>
    <div>
      <Pages_01_Props />
    </div>
    <div>
      <Pagea_02_CustomEvent />
    </div>
    <div>
      <Pagea_04_VModel />
    </div>
    <div>
      <Pagea_05_Attrs />
    </div>
    <div>
      <Pages_07_ProvideInject />
    </div>
    <div>
      <Teleport1 />
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
import Reactive from "./components/08_reactive/index.vue";
import ToRef from "./components/09_toRef_toRefs/index.vue";
import Computed from "./components/10_computed/index.vue";
import Watch from "./components/11_watch/index.vue";
import WatchEffect from "./components/12_watchEffect/index.vue";
import DefineEmits from "./components/13_defineEmits子傳父/index.vue";
import DefineExpose from "./components/14_defineExpose子傳父/index.vue";
import DefineProps from "./components/15_defineProps父傳子/index.vue";
import Lifecycle from "./components/16_lifecycle/index.vue";
import Hook from "./components/17_自定義hook/index.vue";
import Router from "./components/18_vue-router/index.vue";
import Pinia from "./components/19_pinia/index.vue";
import Slot from "./components/20_slot/Index.vue";
import Pages_01_Props from "./pages/01_props/Index.vue";
import Pagea_02_CustomEvent from "./pages/02_custom-event/Index.vue";
import Pagea_04_VModel from "./pages/04_v-model/Index.vue";
import Pagea_05_Attrs from "./pages/05_$attrs/Index.vue";
import Pages_07_ProvideInject from "./pages/07_provide＆inject/Index.vue";
import Teleport1 from "./components/21_teleport/Index.vue";
import { reactive } from "vue";

const persons = reactive([
  { from: "爸爸給的", name: "John", age: 20 },
  { from: "爸爸給的", name: "Tom", age: 25 },
  { from: "爸爸給的", name: "Jane", age: 30 },
]);
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.props {
  border: 1px solid #000;
}
</style>
