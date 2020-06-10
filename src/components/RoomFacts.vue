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

  &__text {
    //@include p-style;
    color: $white;
    width: 517px;
    line-height: 170%;
  }
}
</style>
