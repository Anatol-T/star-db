<template>
  <div class="row">
    <div class="column">
      <h3>Starships:</h3>
      <SdbLoading v-if="isLoading" />
      <SdbErrorMessage v-if="error" />
      <ul v-if="starships">
        <li
          v-for="(starship, index) in starships"
          :key="index"
          @click="chosenStarship(index)"
        >
          {{ starship.name }}
        </li>
      </ul>
    </div>
    <div v-if="starships" class="character">
      <h3>{{ starships[indexOfStarship].name }}</h3>
      <img :src="img" alt="image" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/starships";
import SdbLoading from "@/components/Loading";
import SdbErrorMessage from "@/components/ErrorMessage";

export default {
  name: "Starships",
  components: {
    SdbLoading,
    SdbErrorMessage,
  },
  data() {
    return {
      indexOfStarship: 0,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.starships.isLoading,
      starships: (state) => state.starships.data,
      error: (state) => state.starships.error,
    }),
    img() {
      let pic;
      try {
        pic = require(`../assets/starships/${this.indexOfStarship + 1}.jpg`);
      } catch (error) {
        pic = require(`../assets/default.webp`);
      }

      return pic;
    },
  },
  mounted() {
    this.updateStarships();
  },
  methods: {
    updateStarships() {
      this.$store.dispatch(actionTypes.getStarships, { page: 1 });
    },
    chosenStarship(index) {
      this.indexOfStarship = index;
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
