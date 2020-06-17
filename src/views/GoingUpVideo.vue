<template>
  <div class="goingUpVideo">
    <section>
      <video
        ref="currentVideo"
        @ended="goToExit()"
        class="goingUpVideo__video"
        autoplay="true"
        preload="auto"
        muted="true"
        src="../assets/videos/upVideo.mp4"
        type="video/mp4"
      >
        >
      </video>
      <router-link :to="{ name: 'Exit' }" class="goingUpVideo__CTA">
        <CTA msg="Passer la vidéo" />
      </router-link>
    </section>
  </div>
</template>

<script>
import CTA from "@/components/CTA.vue";

export default {
  name: "GoingUpVideo",
  components: {
    CTA,
  },
  methods: {
    goToExit() {
      window.location.href = "Exit";
    },
  },
};
</script>

<style lang="scss" scoped>
.goingUpVideo {
  position: relative;
  height: 100vh;
  width: 100%;

  &__video {
    width: 100%;
    height: 95vh;
    object-fit: cover;
  }

  &__CTA {
    position: absolute;
    bottom: 10px;
    left: 20px;
  }
}
</style>
