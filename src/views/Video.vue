<template>
<div class="wayDownPage">
    <section>
      <video
        class="wayDownPage__video"
        muted="true"
        autoplay="true"
        preload="auto"
        :src="videoTab[video]"
        type="video/mp4"
        >
      </video>
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
export default {
  name: "Video",
  data(){
      return{
          videoTab: [marche1, marche2, marche3, marche4, marche5, marche6, marche7],
          video: localStorage.getItem('nbClick'),
          }
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
  height: 100vh;
  object-fit: cover;
}


</style>
