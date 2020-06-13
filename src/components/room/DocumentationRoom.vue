<template>
  <section class="documentation">
    <div
      class="documentation__content documentation__content--text"
      v-html="this.room.room_describ"
    ></div>
    <div class="documentation__content documentation__content--img">
      <img
        v-for="item in allPics"
        :key="item"
        :src="'http://kta-api.vhswebs.com/images' + item"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "DocumentationRoom",
  props: {
    room: Object,
    allPics: Object,
  },
};
</script>

<style lang="scss" scoped>
.documentation {
  padding-top: 10px;
  padding: 10px;
  background-color: $black;
  display: flex;

  &__content {
    padding: 20px;

    &--img {
      width: 40%;
      display: flex;
      flex-direction: column;
      img {
        align-self: center;
        margin-bottom: 10px;
      }
    }

    &--text {
      width: 60%;
    }
  }
}
</style>
