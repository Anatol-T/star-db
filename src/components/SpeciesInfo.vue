<template>
  <h3>{{ species.name }}</h3>
  <div class="container">
    <p class="block-element">Average height: {{ species.average_height }};</p>
    <p class="block-element">Average lifespan: {{ species.average_lifespan }};</p>
    <p class="block-element">Language: {{ species.language }};</p>
    <p class="block-element">Classification: {{ species.classification }};</p>
    <p class="block-element">Skin color: {{ species.skin_colors }};</p>
    <p class="block-element">Hair color: {{ species.hair_colors }};</p>
  </div>
  <button @click="$emit('close')" class="btn btn-primary">Close it!</button>
</template>
<script>
export default {
  name: "SpeciesInfo",
  props: {
    species: {
      type: Object,
      required: true,
    },
  },
  emits: ["close"],
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
