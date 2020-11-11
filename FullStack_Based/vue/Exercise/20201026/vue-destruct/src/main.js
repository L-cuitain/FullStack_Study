import { createApp } from "vue";
import App from "./App.vue";

//第一种: export导出 变量或方法
// import { 变量a , 变量b , 变量c} = "...";
//第二种: export default 导出  变量或方法 转为为一个大对象 用对象的属性获取
// import {变量} = "...";
// console.log(变量.属性名);
//第三种: * 指定对象  将值全部输出在这个对象中
// import * as index from "...";
// console.log(index.属性名);

//引入 test.js
//把导出的 对象 命名
// * 号 指定一个对象  输出值都加载这个对象中
import { ch } from "./assets/js/test";

console.log(ch);

createApp(App).mount("#app");
