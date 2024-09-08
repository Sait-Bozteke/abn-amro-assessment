import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GenreView from '../views/GenreView.vue';
import ShowDetails from '../views/ShowDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/genre/:genre',
    name: 'GenreView',
    component: GenreView,
    props: true,
  },
  {
    path: '/shows/:id',
    name: 'ShowDetails',
    component: ShowDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
