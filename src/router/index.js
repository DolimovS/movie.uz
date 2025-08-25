import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import MoviesShows from "../pages/MoviesOpen/MoviesOpen.vue";
import Support from "../pages/Support/Support.vue";
import Subscription from "../pages/Subscription/Subscription.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/movies", component: MoviesShows },
  { path: "/support", component: Support },
  { path: "/subscriptions", component: Subscription },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
