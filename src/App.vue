<template>
  <div ref="screen" id="app">
    <NavBar />
    <vue-page-transition name="fade-in-down">
      <router-view />
    </vue-page-transition>
    <Footer :screenRef="screenRef" />
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
  data(){
    return {
      screenRef: {},
    }
  },  
  mounted(){
    this.screenRef = this.$refs['screen']
  }
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
  //border: 3px solid red;
}

.soundOnIcon {
  //border: 2px solid blue;
}
</style>
