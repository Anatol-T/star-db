import { createStore } from "vuex";

import randomPlanet from "@/store/modules/randomPlanet";
import characters from "@/store/modules/characters";
import planets from "@/store/modules/planets";
import species from "@/store/modules/species";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    randomPlanet,
    characters,
    planets,
    species,
  },
});
