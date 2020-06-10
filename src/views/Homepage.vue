<template>
  <div>
    <div class="homepage__presentation">
      <h1 class="homepage__presentation--title">
        Les Catacombes
      </h1>
      <h2 class="homepage__presentation--subtitle">La face cachée de Paris</h2>
    </div>
    <div>
      <router-link :to="{ name: 'Disclaimer' }" tag="button">
        Commencer la descente
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<style lang="scss" scoped>
.homepage__presentation {
  text-align: center;
  padding: 30px;
  background-color: hsla(0, 0, 10%, 0.7);
  display: inline-block;
  position: relative;

  &:before {
    left: 0;
    top: 0;
    border-left: 1px solid $yellow;
    border-top: 1px solid $yellow;
  }

  &:after {
    bottom: 0;
    right: 0;
    border-right: 1px solid $yellow;
    border-bottom: 1px solid $yellow;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
  }

  &--title {
    @include p-style;
    color: $white;
  }

  &--subtitle {
    @include p-style;
  }
}
</style>
