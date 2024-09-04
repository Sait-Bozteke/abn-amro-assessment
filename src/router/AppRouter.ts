import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowView from "../views/ShowView.vue";
import ShowDetails from "../components/ShowDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/shows/:id",
    name: "ShowDetails",
    component: ShowDetails,
    props:true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
