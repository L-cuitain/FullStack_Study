//导入 vue-router
import { createRouter , createWebHashHistory } from "vue-router";

//导入 组件
import Home from "../components/Home";
import About from "../components/About";
import Connect from "../components/Connect";
import Org from "../components/Org";

//创建路由
const routes = [
    //重定向  当用户访问 / 时 自动跳转到 /home
    {path :  "/" , redirect : '/home' },
    {path : "/about" , redirect : "/org"},
    //定义路由
    {path : '/home' , component : Home},
    {path : '/about' , component : About , children : [
        {path : "/connect" , component : Connect},
        {path : "/org" , component : Org}
    ]}
]

//引用路由
const router = createRouter({
    history : createWebHashHistory(),
    //引入创建的路由
    routes
})

//导出路由
export default router;