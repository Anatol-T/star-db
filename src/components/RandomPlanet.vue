<template>
  <div class="max-h">
    <SdbLoading v-if="isLoading" />
    <SdbErrorMessage v-if="error" />
    <div v-if="randomPlanet" class="random-planet">
      <img className="planet-image" :src="img" alt="planet" />
      <div>
        <h4>{{ randomPlanet.name }}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{{ randomPlanet.population }}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{{ randomPlanet.rotation_period }}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
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
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.randomPlanet.isLoading,
      randomPlanet: (state) => state.randomPlanet.data,
      error: (state) => state.randomPlanet.error,
    }),
    img() {
      return require(`../assets/${this.id}.jpg`);
    },
  },
  mounted() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 10000);
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
