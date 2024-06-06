// 引入
import { createRouter, createWebHistory } from "vue-router";
// 引入组件
import Home from "@/components/18_vue-router/branch/pages/Home.vue";
import About from "@/components/18_vue-router/branch/pages/About.vue";
import News from "@/components/18_vue-router/branch/pages/News.vue";
import Detail from "@/components/18_vue-router/branch/pages/Detail.vue";
import NewsParams from "@/components/18_vue-router/branch/pages/NewsParams.vue";
import DetailParams from "@/components/18_vue-router/branch/pages/DetailParams.vue";

const router = createRouter({
  history: createWebHistory(), // 路由器模式
  routes: [
    // 路由配置
    {
      name: "home",
      path: "/home",
      component: Home,
    },
    {
      name: "about",
      path: "/about",
      component: About,
    },
    {
      name: "news",
      path: "/news",
      component: News,
      children: [
        {
          name: "detail",
          path: "detail",
          component: Detail,
        },
      ],
    },
    {
      name: "news-params",
      path: "/news-params",
      component: NewsParams,
      children: [
        {
          name: "detail-params",
          path: "/detail-params/:id/:title/:content",
          component: DetailParams,
        },
      ],
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

// 導出
export default router;
