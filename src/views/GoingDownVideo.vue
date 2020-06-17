<template>
  <div class="wayDownPage">
    <section>
      <video
        ref="currentVideo"
        @ended="goToHistory()"
        class="wayDownPage__video"
        autoplay="true"
        preload="auto"
        muted="true"
        src="../assets/videos/open.mp4"
        type="video/mp4"
      >
        >
      </video>
      <router-link :to="{ name: 'GoingDownHistory' }" class="wayDownPage__CTA">
        <CTA msg="Passer la vidéo" />
      </router-link>
    </section>
  </div>
</template>

<script>
import CTA from "@/components/CTA.vue";

export default {
  name: "GoingDownVideo",
  components: {
    CTA,
  },
  methods: {
    goToHistory() {
      window.location.href = "GoingDownHistory";
    },
  },
};
</script>

<style lang="scss" scoped>
.wayDownPage {
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100%;

  &__video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  &__CTA {
    position: absolute;
    bottom: 10px;
    left: 20px;
  }
}
</style>
