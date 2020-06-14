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
  background-color: $black;
  width: 100%;
  height: 100vh;
}

a {
  text-decoration: none;
}

.fullScreenIcon {
  border: 3px solid red;
}

.soundOnIcon {
  border: 2px solid blue;
}
</style>
