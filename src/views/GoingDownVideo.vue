<template>
  <div class="wayDownPage">
    <section>
      <video
        ref="currentVideo"
        @click="goToHistory()"
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
      let videoDuration = 0;

      setTimeout(() => {
        videoDuration = this.$refs.currentVideo.duration
      
      setTimeout(() => {
        window.location.href = 'GoingDownHistory'
      }, videoDuration*1000);
      }, 1000);
    }
  },
  mounted(){
    this.goToHistory()
  }
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
