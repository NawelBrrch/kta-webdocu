<template>

    <Pano
        @on-load="onLoad"
        :source="urls[index]">
    </Pano>

</template>

<script>
import Pano from 'vuejs-vr';

export default {
  name: "PanoramicView",
  components: {
    Pano
  },
  data() {
    return { 
      ulrs: [
        'src/assets/images/panorama.png',
        '../assets/pano.png'
      ],
      index: 0
    }
  },
};
</script>

<style lang="scss" scoped></style>