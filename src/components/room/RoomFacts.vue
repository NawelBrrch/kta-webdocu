<template>
  <div
    class="room__fact"
    v-bind:style="{
      backgroundImage: 'url(http://kta-api.vhswebs.com/images' + fact.p + ')',
    }"
  >
    <TextFrame class="room__fact--text">
      {{ fact.f }}
    </TextFrame>
  </div>
</template>

<script>
import TextFrame from "@/components/TextFrame.vue";

export default {
  name: "RoomFacts",
  components: {
    TextFrame,
  },
  props: {
    fact: Object,
  },
};
</script>

<style lang="scss" scoped>
.room__fact {
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: 40px;
  position: relative;
  z-index: -10;

  @include tablet-portrait {
    padding-top: 100px;
  }

  &--text {
    width: 75vw;
    margin-left: $padding-navBar-mobile;
    position: relative;
    z-index: -1;

    @include tablet-portrait {
      width: 43vw;
      margin-left: $padding-navBar-desktop;
    }
  }
}
</style>
