import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Characters from "@/views/Characters.vue";
import Planets from "@/views/Planets.vue";
import Species from "@/views/Species.vue";

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
    path: "/species",
    name: "species",
    component: Species,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
