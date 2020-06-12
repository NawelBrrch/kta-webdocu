<template>

  <Pano  class="reda" :source="url[0]"></Pano>

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

.reda {
  height: 100vh;
  width: 100vw;
}


</style> 

<style lang="scss" scoped>


</style>

