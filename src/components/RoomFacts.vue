<template>
  <div class="roomFacts">
    <p class="roomFacts__text">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "RoomFacts",
};
</script>

<style lang="scss" scoped>
.roomFacts {
  padding: 47px;
  background-color: hsla(0, 0, 10%, 0.7);
  display: inline-block;
  &__text {
    @include p-style;
    color: $white;
    width: 517px;
    line-height: 170%;
  }
}
</style>
