<template>

  <div ref="screen" id="app">
    <div v-if="isMobile()">
      <MobileLandscape/>
      </div>
    <div v-else>
      <NavBar />
        <vue-page-transition name="fade-in-down">
          <router-view />
        </vue-page-transition>
        <Footer />
    <Footer :screenRef="screenRef" />

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import MobileLandscape from "@/views/MobileLandscape.vue";

export default {
  name: "App.vue",
  components: {
    NavBar,
    Footer,
    MobileLandscape
  },
  data(){
    return {
      screenRef: {}
    }
  },   
  
  methods: {
  isMobile() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true
    } else {
      return false
    }
  },
  mounted(){
    this.screenRef = this.$refs['screen']
  }
}
}
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
