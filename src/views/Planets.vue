<template>
  <div class="row">
    <div class="column">
      <h3>Planets:</h3>
      <SdbLoading v-if="isLoading" />
      <SdbErrorMessage v-if="error" />
      <ul v-if="planets">
        <SdbPagination
          :total="total"
          :limit="limit"
          :url="baseUrl"
          :current-page="currentPage"
        />
        <li
          v-for="(planet, index) in planets"
          :key="index"
          @click="chosenPlanet(index)"
        >
          {{ planet.name }}
        </li>
      </ul>
    </div>
    <div v-if="planets" class="character">
      <h3>{{ planets[indexOfPlanet].name }}</h3>
      <img :src="img" alt="image" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/planets";
import SdbLoading from "@/components/Loading";
import SdbErrorMessage from "@/components/ErrorMessage";
import SdbPagination from "@/components/Pagination";

export default {
  name: "Planets",
  components: {
    SdbLoading,
    SdbErrorMessage,
    SdbPagination,
  },
  data() {
    return {
      indexOfPlanet: 0,
      total: 60,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.planets.isLoading,
      planets: (state) => state.planets.data,
      error: (state) => state.planets.error,
    }),
    img() {
      let pic;
      try {
        pic = require(`../assets/${
          this.indexOfPlanet + (this.currentPage - 1) * 10 + 1
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
      this.updatePlanets();
      this.indexOfPlanet = 0;
    },
  },
  mounted() {
    this.updatePlanets();
  },
  methods: {
    updatePlanets() {
      this.$store.dispatch(actionTypes.getPlanets, { page: this.currentPage });
    },
    chosenPlanet(index) {
      this.indexOfPlanet = index;
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
  width: 250px;
  height: 250px;
}
.character {
  min-width: 300px;
}
</style>
