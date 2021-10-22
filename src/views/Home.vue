<template>
  <div class="home">
    <div class="logo">
      <div class="title tc-yellow-400">Star</div>
      <div class="subtitle">A VISUAL GUIDE</div>
      <div class="title tc-yellow-400">wars</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.title {
  font-family: jedi-outline, fantasy;
  src: local("jedi-outline"), url("../assets/fonts/Starjout.ttf");
  font-size: 8em;
}
.tc-yellow-400 {
  color: #ffee58 !important;
}
</style>
