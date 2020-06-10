<template>
  <div class="footer">
    <div class="footer__icones">
      <div class="footer__play">P</div>
      <div class="footer__fullScreen">FS</div>
      <div class="footer__mute">M</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
.footer {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(5, 5, 5, 0.56472) 39.03%,
    rgba(5, 5, 5, 0.378) 63.23%,
    rgba(26, 26, 26, 0) 105.55%,
    rgba(26, 26, 26, 0) 105.56%
  );
  transform: rotate(-180deg);
  height: 15%;
}

.footer__icones {
  display: flex;
  justify-content: space-between;
  transform: rotate(180deg);
}

.footer__play {
  display: none;

  @media (min-width: 768px) {
    display: block;
    background-color: pink;
    width: 20px;
    height: 20px;
  }
}

.footer__fullScreen {
  background-color: lightgreen;
  width: 20px;
  height: 20px;
}

.footer__mute {
  background-color: lightseagreen;
  width: 20px;
  height: 20px;
}
</style>
