import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeComponent from "@/views/home-view.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: HomeComponent },
  { path: "/:notFound(.*)", redirect: "/home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
