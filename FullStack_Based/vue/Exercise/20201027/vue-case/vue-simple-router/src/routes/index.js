//导入vue-router
import { createRouter, createWebHashHistory } from "vue-router";

//导入组件
import PageIndex from "../components/PageIndex";
import PageAside from "../components/PageASide";
import ListHappy from "../components/ListHappy";
import ListAngry from "../components/ListAngry";
import ListMagical from "../components/ListMagical";
import ListSad from "../components/ListSad";

//定义路由
const routes = [
  //重定向
  { path: "/", redirect: "/pageIndex" },
  { path: "/pageIndex", component: PageIndex },
  {
    path: "/PageAside",
    component: PageAside,
    children: [{ path: "/ListHappy", component: ListHappy }]
  },
  {
    name: "Magical",
    path: "/ListMagical/:status",
    component: ListMagical,
    props: true
  },
  { name: "Sad", path: "/ListSad/:status", component: ListSad, props: true },
  {
    name: "Angry",
    path: "/ListAngry/:status",
    component: ListAngry,
    props: router => ({
      status: router.params.status
    })
  }
];

//创建路由
const router = createRouter({
  history: createWebHashHistory(),
  //引用路由
  routes
});

//导出路由
export default router;
