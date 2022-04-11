<template>
  <h3>{{ planet.name }}</h3>
  <div class="container">
    <p class="block-element">Diameter: {{ planet.diameter }};</p>
    <p class="block-element">Gravity: {{ planet.gravity }};</p>
    <p class="block-element">Orbital period: {{ planet.orbital_period }};</p>
    <p class="block-element">Population: {{ planet.population }};</p>
    <p class="block-element">Terrain: {{ planet.terrain }};</p>
    <p class="block-element">Surface water: {{ planet.surface_water }};</p>
  </div>
</template>
<script>
export default {
  name: "PlanetInfo",
  props: {
    planet: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
.block-element {
  flex: 0 1 50%;
}
</style>
