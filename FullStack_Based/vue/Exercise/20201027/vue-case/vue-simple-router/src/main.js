import { createApp } from "vue";
import App from "./App.vue";

//导入routes
import routes from "./routes";
//挂载
createApp(App)
  .use(routes)
  .mount("#app");
