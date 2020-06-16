<template>
  <div class="CTA">
    <div class="button">
      <div class="button__cta">
        <span>{{ msg }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    msg: String
  }
    
}
</script>

<style lang="scss" scoped>
*:before,
*:after {
  box-sizing: border-box;
  transition: 0.5s ease-in-out;
  z-index: -1;
}

.CTA {
  text-align: center;
}

.button {
  background-color: $lightblack;
  z-index: -1;
  display: inline-block;
}
.button__cta {
  @include CTA-style;
  z-index: 1;
  text-align: center;
  text-decoration: none;
  line-height: $btn-height-mobile;
  position: relative;
  display: block;
  overflow: hidden;
  size: 100% $btn-height-mobile;
  max-width: 100%;
  @include tablet-landscape {
    line-height: $btn-height-tablet;
    size: 100% $btn-height-tablet;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  span {
    z-index: 2;
    padding: 0 2vw;
  }

  &:before {
    right: -50px;
    border-right: 50px solid transparent;
    border-bottom: $btn-height-mobile solid $yellow;
    transform: translateX(-100%);
    @include tablet-landscape {
      border-bottom: $btn-height-tablet solid $yellow;
    }
  }

  &:after {
    left: -50px;
    border-left: 50px solid transparent;
    border-top: $btn-height-mobile solid $yellow;
    transform: translateX(100%);
    @include tablet-landscape {
      border-top: $btn-height-tablet solid $yellow;
    }
  }

  &:hover {
    color: $black;

    &:before {
      transform: translateX(-49%);
    }
    &:after {
      transform: translateX(49%);
    }
  }
}
</style>