import charactersApi from "@/api/characters";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationTypes = {
  getCharactersStart: "[characters] Get characters start",
  getCharactersSuccess: "[characters] Get characters success",
  getCharactersFailure: "[characters] Get characters failure",
};

export const actionTypes = {
  getCharacters: "[characters] Get characters",
};

const mutations = {
  [mutationTypes.getCharactersStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getCharactersSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getCharactersFailure](state) {
    state.isLoading = false;
    state.error = true;
  },
};

const actions = {
  [actionTypes.getCharacters](context) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getCharactersStart);
      charactersApi
        .getCharacters()
        .then((response) => {
          context.commit(
            mutationTypes.getCharactersSuccess,
            response.data.results
          );
          resolve(response.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getCharactersFailure);
          //console.log(error.response.data)
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
