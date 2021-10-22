import { createStore } from "vuex";

import randomPlanet from "@/store/modules/randomPlanet";
import characters from "@/store/modules/characters";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    randomPlanet,
    characters,
  },
});
