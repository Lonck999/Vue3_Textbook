// 引入
import { createRouter, createWebHistory } from "vue-router";
// 引入组件
import Home from "@/components/18_vue-router/branch/components/Home.vue";
import About from "@/components/18_vue-router/branch/components/About.vue";
import News from "@/components/18_vue-router/branch/components/News.vue";

const router = createRouter({
  history: createWebHistory(), // 路由器模式
  routes: [
    // 路由配置
    { path: "/home", component: Home },
    { path: "/news", component: News },
    { path: "/about", component: About },
  ],
});

// 導出
export default router;
