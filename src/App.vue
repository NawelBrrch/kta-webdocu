<template>
  <div id="app">
    <NavBar />
    <vue-page-transition name="fade-in-down">
      <router-view />
    </vue-page-transition>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App.vue",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  //background-color: $gray;
  width: 100%;
  height: 100vh;
}

a {
  text-decoration: none;
}
</style>
