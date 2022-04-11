<template>
  <h3>{{ character.name }}</h3>
  <div class="container">
    <p class="block-element">Gender: &nbsp; {{ character.gender }};</p>
    <p class="block-element">Skin color: &nbsp; {{ character.skin_color }};</p>
    <p class="block-element">Mass: &nbsp; {{ character.mass }};</p>
    <p class="block-element">Hair color: &nbsp; {{ character.hair_color }};</p>
    <p class="block-element">Height: &nbsp; {{ character.height }};</p>
    <p class="block-element">Eye color: &nbsp; {{ character.eye_color }};</p>
  </div>
</template>
<script>
export default {
  name: "CharacterInfo",
  props: {
    character: {
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
