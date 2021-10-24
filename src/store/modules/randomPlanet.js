import randomPlanetApi from "@/api/randomPlanet";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getPlanetStart: "[randomPlanet] Get planet start",
  getPlanetSuccess: "[randomPlanet] Get planet success",
  getPlanetFailure: "[randomPlanet] Get planet failure",
};

export const actionTypes = {
  getPlanet: "[randomPlanet] Get planet",
};

const mutations = {
  [mutationTypes.getPlanetStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getPlanetSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPlanetFailure](state) {
    state.isLoading = false;
    state.error = true;
  },
};

const actions = {
  [actionTypes.getPlanet](context, { id }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPlanetStart, id);
      randomPlanetApi
        .getPlanet(id)
        .then((response) => {
          context.commit(mutationTypes.getPlanetSuccess, response.data);
          resolve(response.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getPlanetFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
