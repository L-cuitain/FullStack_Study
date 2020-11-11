import { createApp } from "vue";
import App from "./App.vue";

//导入store
import store from "./store";

createApp(App)
  .use(store)
  .mount("#app");
