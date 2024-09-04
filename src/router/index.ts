import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowView from "../views/ShowView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/shows/:id",
    name: "ShowDetails",
    component: ShowView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
