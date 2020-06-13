<template>
  <div class="panorama">
    <Pano  class="panorama__view" :source="url[0]"></Pano>*
  </div>
</template>

<script>
import {Pano} from 'vuejs-vr';
import urlImage from "../assets/images/panorama.jpg";



export default {
  name: "PanoramicView",
  components: {
    Pano
  },
  data() {
    return {
      url: [urlImage]
    };
  },
};

</script>

<style lang="scss" scoped>

.panorama {
  overflow: hidden;
  height: 100vh;
}

.panorama__view {
  height: 110vh;
  width: 100vw;
}


</style> 

<style lang="scss" scoped>




</style>

