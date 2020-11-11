//导入 vue-router
import { createRouter, createWebHashHistory } from "vue-router";

//导入 组件
import Users from "../components/Users";

//创建路由
const routes = [
  //默认启动重定向到user页面
  { path: "/", redirect: "/user" },
  { path: "/user", component: Users },
  //懒加载  当路由path被触发时加载  而不会在应用启动就加载
  { path: "/setting", component: () => import("../components/Settings") },
  { path: "/order", component: () => import("../components/Orders") },
  { path: "/product", component: () => import("../components/Products") },
  { path: "/authority", component: () => import("../components/Authority") },
  {
    path: "/userInfo/:id",
    component: () => import("../components/UserInfo"),
    props: true
  }
];

//导入路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

//导出路由
export default router;
