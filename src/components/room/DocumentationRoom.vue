<template>
  <section class="documentation">
    <p class="documentation__text" v-html="this.room.room_describ"></p>
  </section>
</template>

<script>
export default {
  name: "DocumentationRoom",
  props: {
    room: Object,
    mainPic: Object,
  },
};
</script>

<style lang="scss" scoped>
.documentation__text {
  padding: 10px;
  background-color: $black;
}
</style>
