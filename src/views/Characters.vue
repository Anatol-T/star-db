<template>
  <div class="row">
    <div class="column">
      <h3>Characters:</h3>
      <SdbLoading v-if="isLoading" />
      <SdbErrorMessage v-if="error" />
      <ul v-if="characters">
        <li v-for="character in characters" :key="character.name">
          {{ character.name }}
        </li>
      </ul>
    </div>
    <div>Character</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/characters";
import SdbLoading from "@/components/Loading";
import SdbErrorMessage from "@/components/ErrorMessage";

export default {
  name: "Characters",
  components: {
    SdbLoading,
    SdbErrorMessage,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.characters.isLoading,
      characters: (state) => state.characters.data,
      error: (state) => state.characters.error,
    }),
  },
  mounted() {
    this.updateCharacters();
  },
  methods: {
    updateCharacters() {
      this.$store.dispatch(actionTypes.getCharacters);
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-around;
}
.ul {
  list-style-type: none;
}
</style>
