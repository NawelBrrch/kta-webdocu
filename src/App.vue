<template>
  <div id="app">
    <NavBar />
    <vue-page-transition name="fade-in-down">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App.vue",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
#app {
  background-color: $yellow;
  width: 100%;
  height: 100vh;
}
</style>
