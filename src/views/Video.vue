<template>
  <div class="wayDownPage">
    <section>
      <video
        ref="currentVideo"
        @ended="goToRoom()"
        class="wayDownPage__video"
        muted="true"
        autoplay="true"
        preload="auto"
        :src="videoTab[nbClick]"
        type="video/mp4"
      ></video>
      <router-link
        :to="{ name: 'Room', params: { id_room: this.id_room } }"
        class="wayDowPage__CTA"
      >
        <CTA msg="Passer la vidéo" />
      </router-link>
    </section>
  </div>
</template>

<script>
import marche1 from "../assets/videos/marche1.mp4";
import marche2 from "../assets/videos/marche2.mp4";
import marche3 from "../assets/videos/marche3.mp4";
import marche4 from "../assets/videos/marche4.mp4";
import marche5 from "../assets/videos/marche5.mp4";
import marche6 from "../assets/videos/marche6.mp4";
import marche7 from "../assets/videos/marche7.mp4";
import CTA from "@/components/CTA.vue";


export default {
  name: "Video",
  components: {
    CTA,
  },
  data(){
      return{
          videoTab: [marche1, marche2, marche3, marche4, marche5, marche6, marche7],
          nbClick: localStorage.getItem('nbClick'),
          }
        },
  props: ["id_room"],
  methods: {
    goToRoom(){
        window.location.href = `room/${this.id_room}`
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
  height: 100vh;
  object-fit: cover;
}
.wayDowPage__CTA {
  position: absolute;
  bottom: 10px;
  left: 20px;
}
</style>
