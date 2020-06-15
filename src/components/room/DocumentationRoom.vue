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
  padding: $padding-navBar-mobile;
  padding-top: 40px;
  background-color: $black;
  display: flex;
  justify-content: space-between;

  @include tablet-landscape {
    padding: $padding-navBar-desktop;
    padding-top: 100px;
  }
  &__content {
    &--img {
      display: flex;
      flex-direction: column;
      width: 41vw;

      img {
        margin-bottom: 20px;
      }
    }

    &--text {
      width: 51vw;
      padding-right: $padding-navBar-mobile;

      @include tablet-landscape {
        width: 45vw;
        padding-right: 50px;
      }
    }
  }
}
</style>
