import { createApp } from "vue";
import App from "./App.vue";

//导入 routes
import routes from "./routes";

const app = createApp(App);
app.use(routes);
app.mount("#app");
// createApp(App).mount("#app");
