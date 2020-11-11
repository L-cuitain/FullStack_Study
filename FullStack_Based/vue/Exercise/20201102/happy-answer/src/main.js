import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//导入common.scss(公共样式)
import "../public/css/common.scss";
//rem.js(适配各个手机的js库);
import "../public/js/rem";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
