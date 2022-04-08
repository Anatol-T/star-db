<template>
  <div>
    <RandomPlanet />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/characters">Characters</router-link> |
      <router-link to="/planets">Planets</router-link> |
      <router-link to="/species">Species</router-link>
    </div>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import RandomPlanet from "@/components/RandomPlanet";
export default {
  name: "App",
  components: {
    RandomPlanet,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

/* .route-enter-active {
  transition: opacity 0.5s ease;
} */

.route-leave-active {
  transition: opacity 0.5s ease;
}

.route-enter-to,
.route-button-leave-from {
  opacity: 1;
}
</style>
