import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home/Home.vue";
import MoviesShows from "../pages/MoviesShows/MoviesShows.vue";
import Support from "../pages/Support/Support.vue";
import Subscription from "../pages/Subscription/Subscription.vue";
import CatigoriyaMovie from "../pages/CatigoriyaMovie/CatigoriyaMovie.vue";
import OneMovies from "../pages/OneMovies/OneMovies.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/movies", component: MoviesShows },
  { path: "/support", component: Support },
  { path: "/subscriptions", component: Subscription },
  { path: "/catogoriyamovie", component: CatigoriyaMovie },
  { path:  "/movies/:id(\\d+)", component: OneMovies },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
