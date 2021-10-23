<template>
  <div class="row">
    <div class="column">
      <h3>Characters:</h3>
      <SdbLoading v-if="isLoading" />
      <SdbErrorMessage v-if="error" />
      <ul v-if="characters">
        <li
          v-for="(character, index) in characters"
          :key="index"
          @click="chosenCharacter(index)"
        >
          {{ character.name }}
        </li>
      </ul>
    </div>
    <div v-if="characters" class="character">
      <h3>{{characters[indexOfCharacter].name}}</h3>
      <img :src="img" alt="image">
    </div>
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
  data() {
    return {
      indexOfCharacter: 0,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.characters.isLoading,
      characters: (state) => state.characters.data,
      error: (state) => state.characters.error,
    }),
    img() {
      return require(`../assets/characters/${this.indexOfCharacter + 1}.jpg`);
    },
  },
  mounted() {
    this.updateCharacters();
  },
  methods: {
    updateCharacters() {
      this.$store.dispatch(actionTypes.getCharacters);
    },
    chosenCharacter(index) {
      this.indexOfCharacter = index;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-around;
  text-align: left;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
  cursor: pointer;
}
img {
  width: 200px;
  height: 250px;
}
.character {
  min-width: 300px;
}
</style>
