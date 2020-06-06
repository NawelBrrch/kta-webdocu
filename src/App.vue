<template>
  <div id="app">
    <Homepage/>
  </div>
</template>

<script>
import Homepage from './views/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Dedale-Regular";
  text-align: center;
}
</style>
