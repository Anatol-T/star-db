<template>
  <div class="row">
    <div class="column">
      <h3>Species:</h3>
      <SdbLoading v-if="isLoading" />
      <SdbErrorMessage v-if="error" />
      <ul v-if="species">
        <SdbPagination
          :total="total"
          :limit="limit"
          :url="baseUrl"
          :current-page="currentPage"
        />
        <li
          v-for="(sp, index) in species"
          :key="index"
          @click="chosenSpecies(index)"
          :class="{ active: indexOfSpecies === index }"
        >
          {{ sp.name }}
        </li>
      </ul>
    </div>
    <div v-if="species" class="character">
      <h3>{{ species[indexOfSpecies].name }}</h3>
      <img :src="img" alt="image" @click="showDialog" />
      <show-info @close="hideDialog" :open="dialogIsVisible">
        <species-info :species="species[indexOfSpecies]" @close="hideDialog" />
      </show-info>
      <p>Click the image for more details</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/species";
import SdbLoading from "@/components/Loading";
import SdbErrorMessage from "@/components/ErrorMessage";
import SdbPagination from "@/components/Pagination";
import ShowInfo from "@/components/ShowInfo";
import SpeciesInfo from "@/components/SpeciesInfo";

export default {
  name: "Species",
  components: {
    SdbLoading,
    SdbErrorMessage,
    SdbPagination,
    ShowInfo,
    SpeciesInfo,
  },
  data() {
    return {
      indexOfSpecies: 0,
      dialogIsVisible: false,
      total: 37,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.species.isLoading,
      species: (state) => state.species.data,
      error: (state) => state.species.error,
    }),
    img() {
      let pic;
      try {
        pic = require(`../assets/species/${
          this.indexOfSpecies + (this.currentPage - 1) * 10 + 1
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
      this.updateSpecies();
      this.indexOfSpecies = 0;
    },
  },
  mounted() {
    this.updateSpecies();
  },
  methods: {
    updateSpecies() {
      this.$store.dispatch(actionTypes.getSpecies, {
        page: this.currentPage,
      });
    },
    chosenSpecies(index) {
      this.indexOfSpecies = index;
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
