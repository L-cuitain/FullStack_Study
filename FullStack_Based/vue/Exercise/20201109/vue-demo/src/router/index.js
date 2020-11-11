import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../components/Home";
import Item from "../components/Item";
import Score from "../components/Score";

const routes = [
  {
    path : "/",
    component : Home
  },
  {
    path : "/item",
    component : Item
  },
  {
    path : "/score",
    component : Score
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
