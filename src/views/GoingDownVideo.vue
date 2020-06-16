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
        src="../assets/videos/ouverture-plaque.mp4"
        type="video/mp4"
      >></video>
      <router-link :to="{ name: 'GoingDownHistory' }" class="wayDowPage__CTA">
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
    goToHistory(){
        window.location.href = 'GoingDownHistory'
    }
  },
};
</script>

<style lang="scss" scoped>
.wayDownPage {
  position: relative;
  height: 100vh;
  width: 100%;
}

.wayDownPage__video {
  width: 100%;
  height: 95vh;
  object-fit: cover;
}

.wayDowPage__CTA {
  position: absolute;
  bottom: 10px;
  left: 20px;
}
</style>
