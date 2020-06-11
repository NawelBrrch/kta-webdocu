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

$btn-height: 39px;


.button__cta {
  @include CTA-style;
  z-index: 1;
  text-align: center;
  text-decoration: none;
  line-height: $btn-height;
  position: relative;
  display: block;
  overflow: hidden;
  size: 100% $btn-height;
  max-width: 100%;
  

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
    border-bottom: $btn-height solid  $yellow;
    transform: translateX(-100%);
  }

  &:after {
    left: -50px;
    border-left: 50px solid transparent;
    border-top: $btn-height solid  $yellow;
    transform: translateX(100%);
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