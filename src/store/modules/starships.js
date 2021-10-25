import planetsApi from "@/api/planets";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getPlanetsStart: "[planets] Get planets start",
  getPlanetsSuccess: "[planets] Get planets success",
  getPlanetsFailure: "[planets] Get planets failure",
};

export const actionTypes = {
  getPlanets: "[planets] Get planets",
};

const mutations = {
  [mutationTypes.getPlanetsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getPlanetsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getPlanetsFailure](state) {
    state.isLoading = false;
    state.error = true;
  },
};

const actions = {
  [actionTypes.getPlanets](context, { page }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getPlanetsStart);
      planetsApi
        .getPlanets(page)
        .then((response) => {
          context.commit(
            mutationTypes.getPlanetsSuccess,
            response.data.results
          );
          resolve(response.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getPlanetsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
