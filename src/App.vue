<template>
  <div id="app">
    <vue-page-transition name="fade-in-down">
    <router-view/>
    </vue-page-transition>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {

  text-align: center;
  background-color:$yellow;

}
</style>
