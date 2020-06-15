<template>
  <section
    class="hero"
    v-bind:style="{ backgroundImage: 'url(' + mainPic + ')' }"
  >
    <h1 class="hero__title">{{ room.room_name }}</h1>
    <div class="hero__nav">
      <img
        class="hero__nav--arrow"
        src="../../assets/icons/arrow-down-room.svg"
        alt=""
      />
      <p class="hero__nav--text">En savoir plus</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroRoom",
  props: {
    room: Object,
    mainPic: String,
  },
};
</script>

<style lang="scss" scoped>
$arrowHeight: 30vh;
.hero {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  background-position: center;

  &__title {
    align-self: center;
    margin-top: 25vh;
    filter: drop-shadow(0px 0px 8px $black);
  }

  &__nav {
    display: flex;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    width: fit-content;
    position: absolute;
    bottom: 7vh;
    left: $padding-navBar-mobile + 3;

    @include tablet-portrait {
      left: $padding-navBar-desktop + 2;
    }

    &--arrow {
      width: 90px;
      margin-right: 10px;
    }
  }
}
</style>
