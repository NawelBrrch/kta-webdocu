<template>

  <Pano  class="view" :source="url[0]"></Pano>

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

.view {
  height: 130vh;
  width: 100vw;
  overflow: hidden;
}


</style> 

<style lang="scss" scoped>




</style>

