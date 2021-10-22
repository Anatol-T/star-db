import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Characters from "@/views/Characters.vue";
import Planets from "@/views/Planets.vue";
import Starships from "@/views/Starships.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/characters",
    name: "characters",
    component: Characters,
  },
  {
    path: "/planets",
    name: "planets",
    component: Planets,
  },
  {
    path: "/starships",
    name: "starships",
    component: Starships,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
