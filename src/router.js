import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import SpaceMission from "./components/SpaceMission.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/mission/:id", component: SpaceMission, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
