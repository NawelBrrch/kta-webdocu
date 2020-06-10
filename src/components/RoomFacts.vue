<template>
  <div class="roomFacts">
    <p class="roomFacts__text">
      Les catacombes sont le centre même de l’expression artistique des
      cataphiles. On y retrouve les oœuvres de très grands street-artists, comme
      d’amateurs, qui ne cessent d’apprendre. Les grafitis sont mêmes pour
      certaines de réelles oeuvres d’art.
    </p>
  </div>
</template>

<script>
export default {
  name: "RoomFacts",
};
</script>

<style lang="scss" scoped>
div {
  padding: 47px;
  background-color: hsla(0, 0, 10%, 0.7);
  display: inline-block;
}
p {
  //@include p-style;
  color: $white;
  width: 517px;
  line-height: 170%;
}
</style>
