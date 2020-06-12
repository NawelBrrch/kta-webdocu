<template>
  <section class="hero">
    <h1 class="hero__title">{{ room.room_name }}</h1>
    <div class="hero__nav">
      <p class="hero__nav--text">En savoir plus</p>
      <img src="../../assets/icons/arrow-down-room.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroRoom",
  props: {
    room: Object,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  height: 90vh;

  &__title {
    align-self: center;
    margin-top: 25vh;
  }
}
</style>
