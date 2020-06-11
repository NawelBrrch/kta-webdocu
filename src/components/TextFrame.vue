<template>
  <div class="textFrame">
    <p class="textFrame__text">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "TextFrame",
};
</script>

<style lang="scss" scoped>
.textFrame {
  width: 100%;
  padding: 15px;
  background-color: hsla(0, 0, 10%, 0.7);
  display: inline-block;
  position: relative;

  @include tablet-landscape {
    width: 89%;
    padding: 20px;
  }

  @include desktop {
    max-width: 840px;
    padding-top: 30px;
    padding-bottom: 30px;
  }

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
    color: $white;
    line-height: 170%;
  }
}
</style>
