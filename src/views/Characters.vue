<template>
  <div class="row">
    <div class="column">
      <h3>Characters:</h3>
      <SdbLoading v-if="isLoading" />
      <SdbErrorMessage v-if="error" />
      <ul v-if="characters">
        <SdbPagination
          :total="total"
          :limit="limit"
          :url="baseUrl"
          :current-page="currentPage"
        />
        <li
          v-for="(character, index) in characters"
          :key="index"
          @click="chosenCharacter(index)"
          :class="{ active: indexOfCharacter === index }"
        >
          {{ character.name }}
        </li>
      </ul>
    </div>
    <div v-if="characters" class="character">
      <h3>{{ characters[indexOfCharacter].name }}</h3>
      <img :src="img" alt="image" @click="showDialog" />
      <show-info @close="hideDialog" :open="dialogIsVisible">
        <character-info
          :character="characters[indexOfCharacter]"
          @close="hideDialog"
        />
      </show-info>
      <p>Click the image for more details</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/characters";
import SdbLoading from "@/components/Loading";
import SdbErrorMessage from "@/components/ErrorMessage";
import SdbPagination from "@/components/Pagination";
import ShowInfo from "@/components/ShowInfo.vue";
import CharacterInfo from "@/components/CharacterInfo.vue";

export default {
  name: "Characters",
  components: {
    SdbLoading,
    SdbErrorMessage,
    SdbPagination,
    ShowInfo,
    CharacterInfo,
  },
  data() {
    return {
      indexOfCharacter: 0,
      dialogIsVisible: false,
      total: 82,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.characters.isLoading,
      characters: (state) => state.characters.data,
      error: (state) => state.characters.error,
    }),
    img() {
      let pic;
      try {
        pic = require(`../assets/characters/${
          this.indexOfCharacter + (this.currentPage - 1) * 10 + 1
        }.jpg`);
      } catch (error) {
        pic = require(`../assets/default.webp`);
      }
      return pic;
    },
    limit() {
      return 10;
    },
    baseUrl() {
      return this.$route.path;
    },
    currentPage() {
      return Number(this.$route.query.page || "1");
    },
  },
  watch: {
    currentPage() {
      this.updateCharacters();
      this.indexOfCharacter = 0;
    },
  },
  mounted() {
    this.updateCharacters();
  },
  methods: {
    updateCharacters() {
      this.$store.dispatch(actionTypes.getCharacters, {
        page: this.currentPage,
      });
    },
    chosenCharacter(index) {
      this.indexOfCharacter = index;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
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
.active {
  color: mediumseagreen;
}
</style>
