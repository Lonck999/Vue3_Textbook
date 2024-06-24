import { createApp } from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router/index";
// 引入Pinia
import { createPinia } from "pinia";

const app = createApp(App);
// 使用路由
app.use(router);

// 使用Pinia
const pinia = createPinia();
app.use(pinia);

// 挂载
app.mount("#app");
