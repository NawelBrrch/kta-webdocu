<template>
  <div class="homepage">
    <h1>La face cachée des Catacombes de Paris</h1>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>

.homepage {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: no-repeat center url('../assets/images/homepage.png');
  background-size: 100% auto;

  h1 {
    color: $primary-white;
    font-size: 7vw;
    text-transform: uppercase;

  }

}

</style>