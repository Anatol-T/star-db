import speciesApi from "@/api/species";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getSpeciesStart: "[species] Get species start",
  getSpeciesSuccess: "[species] Get species success",
  getSpeciesFailure: "[species] Get species failure",
};

export const actionTypes = {
  getSpecies: "[starships] Get starships",
};

const mutations = {
  [mutationTypes.getSpeciesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getSpeciesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getSpeciesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },
};

const actions = {
  [actionTypes.getSpecies](context, { page }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getSpeciesStart);
      speciesApi
        .getStarships(page)
        .then((response) => {
          context.commit(
            mutationTypes.getSpeciesSuccess,
            response.data.results
          );
          resolve(response.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getSpeciesFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
