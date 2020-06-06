<template>
  <div class="homepage">
    <div class="homepage__title">
      <hr>
      <h1>La face cachée des Catacombes de Paris</h1>
      <hr>
    </div>
    <div class="homepage__button">
      <router-link to="/test" tag="button">Z'est parti</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
}
</script>

<style lang="scss" scoped>

.homepage {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: no-repeat url('../assets/images/homepage.png');
  background-size: 100% auto;
}
.homepage__title {
  width: 80vw;
  margin: 3vw auto;

  h1 {
    font-family: "Dedale-Bold";
    color: $white;
    font-size: 5vw;
    text-transform: uppercase;
    margin: 2vw 0;
    line-height: 1.2;
  }

  hr {
    border: 1.1px solid $white;
    width: 50vw;
  }
}

button {
  border: 2px red solid;
  font-size: 10vw;
}

</style>