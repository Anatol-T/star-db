import starshipsApi from "@/api/starships";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getStarshipsStart: "[starships] Get starships start",
  getStarshipsSuccess: "[starships] Get starships success",
  getStarshipsFailure: "[starships] Get starships failure",
};

export const actionTypes = {
  getStarships: "[starships] Get starships",
};

const mutations = {
  [mutationTypes.getStarshipsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getStarshipsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getStarshipsFailure](state) {
    state.isLoading = false;
    state.error = true;
  },
};

const actions = {
  [actionTypes.getStarships](context, { page }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getStarshipsStart);
      starshipsApi
        .getStarships(page)
        .then((response) => {
          context.commit(
            mutationTypes.getStarshipsSuccess,
            response.data.results
          );
          resolve(response.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getStarshipsFailure);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
