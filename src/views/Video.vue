<template>
  <div class="walk">
    <section>
      <video
        ref="currentVideo"
        @ended="goToRoom()"
        class="walk__video"
        muted="true"
        autoplay="true"
        preload="auto"
        :src="videoTab[nbClick - 1]"
        type="video/mp4"
      ></video>
      <router-link :to="{ name: 'Room', params: { id_room: this.id_room } }" class="walk__CTA">
        <CTA msg="Passer la vidéo" />
      </router-link>
    </section>
  </div>
</template>

<script>
import walk1 from "../assets/videos/walk1.mp4";
import walk2 from "../assets/videos/walk2.mp4";
import walk3 from "../assets/videos/walk3.mp4";
import walk4 from "../assets/videos/walk4.mp4";
import walk5 from "../assets/videos/walk5.mp4";
import walk6 from "../assets/videos/walk6.mp4";
import walk7 from "../assets/videos/walk7.mp4";
import CTA from "@/components/CTA.vue";

export default {
  name: "Video",
  components: {
    CTA,
  },
  data() {
    return {
      videoTab: [walk1, walk2, walk3, walk4, walk5, walk6, walk7],
      nbClick: localStorage.getItem("nbClick"),
    };
  },
  props: ["id_room"],
  methods: {
    goToRoom() {
      window.location.href = `room/${this.id_room}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.walk {
  position: relative;
  height: 100vh;
  width: 100%;
}
.walk__video {
  width: 100%;
  height: 98vh;
  //object-fit: cover;
}
.walk__CTA {
  position: absolute;
  bottom: 10px;
  left: 20px;
}
</style>
