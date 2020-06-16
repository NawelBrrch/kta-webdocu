<template>
  <div class="goingDownImage">
    <router-link class="CTAcontinue" :to="{ name: 'PanoramicView' }">
      <CTA msg="Continuer" />
    </router-link>
  </div>
</template>

<script>
import CTA from "@/components/CTA.vue";

export default {
  name: "GoingDownHistory",
  components: {
    CTA,
  },
};
</script>

<style lang="scss" scoped>
// .goingDownImage:hover {
//   transform: scale(1.5);
// }
.goingDownImage {
  height: 800px;
  width: 100%;
  background-image: url("../assets/images/descente.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}

.CTAcontinue {
  position: relative;
  z-index: 3;
  margin-bottom: 5px;
  margin-left: 20px;

  @include tablet-portrait {
    margin-left: 35px;
    margin-bottom: 15px;
  }
}
</style>
