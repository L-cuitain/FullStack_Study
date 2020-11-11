import { createApp } from "vue";
import App from "./App.vue";

//导入routes文件夹中的index.js文件
import routes from "./routes";
//创建App
const app = createApp(App);
// createApp(App).mount("#app");
//使用路由
app.use(routes);
//挂载
app.mount('#app');

