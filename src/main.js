import { createApp } from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router/index";

const app = createApp(App);
// 使用路由
app.use(router);

// 挂载
app.mount("#app");
