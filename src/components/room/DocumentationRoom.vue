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
  padding-top: 134px;
  padding: 80px;
  background-color: $black;
  display: flex;

  &__content {
    &--img {
      display: flex;
      flex-direction: column;

      img {
        align-self: center;
        margin-bottom: 10px;
      }
    }

    &--text {
      padding-right: 100px;
    }
  }
}
</style>
