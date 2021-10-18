import { createRouter, createWebHistory } from "vue-router";
import People from "@/views/People.vue";
import Planets from "@/views/Planets.vue";
import Starships from "@/views/Starships.vue";

const routes = [
  {
    path: "/",
    name: "people",
    component: People,
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
