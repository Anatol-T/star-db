<template>
  <div class="max-h">
    <SdbLoading v-if="isLoading" />
    <SdbErrorMessage v-if="error" />
    <div v-if="randomPlanet" class="random-planet">
      <img class="planet-image" :src="img" alt="planet" />
      <div>
        <h4>{{ randomPlanet.name }}</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="term">Population</span>
            <span>{{ randomPlanet.population }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Rotation Period</span>
            <span>{{ randomPlanet.rotation_period }}</span>
          </li>
          <li class="list-group-item">
            <span class="term">Diameter</span>
            <span>{{ randomPlanet.diameter }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/randomPlanet";
import SdbLoading from "@/components/Loading";
import SdbErrorMessage from "@/components/ErrorMessage";

export default {
  name: "RandomPlanet",
  components: {
    SdbLoading,
    SdbErrorMessage,
  },
  data() {
    return {
      id: 1,
      interval: null,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.randomPlanet.isLoading,
      randomPlanet: (state) => state.randomPlanet.data,
      error: (state) => state.randomPlanet.error,
    }),
    img() {
      return require(`../assets/planets/${this.id}.jpg`);
    },
  },
  mounted() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  },
  methods: {
    updatePlanet() {
      this.id = Math.floor(Math.random() * 17) + 2;
      this.$store.dispatch(actionTypes.getPlanet, { id: this.id });
    },
  },
};
</script>

<style scoped>
.max-h {
  height: 180px;
}
.random-planet {
  display: flex;
  padding: 1rem;
  border: 1px solid #444;
  margin-bottom: 1rem;
}
@media screen and (max-width: 425px) {
  .max-h {
    height: 380px;
  }
  .random-planet {
    display: block;
  }
}
.random-planet .planet-image {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin-right: 1rem;
}

.random-planet .list-group {
  margin: 1rem 0 0 1rem;
}

.random-planet .list-group-item {
  padding: 0.25rem;
}

.random-planet .list-group-item .term {
  margin-right: 0.5rem;
}
</style>
