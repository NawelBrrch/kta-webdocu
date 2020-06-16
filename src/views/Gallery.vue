<template >
  <div class="galery">
    <h2>Galerie photos</h2>
    <div class="galery__images" :class="isShow ? 'galery__images--modal' : null">
      <img
        v-for="i in srcVideo"
        :key="i"
        class="img"
        @click="toogleIsShow(i)"
        :src="i"
        alt="photos des catacombes"
      />
    </div>
    <Modal v-if="isShow" @close="isShow = false" :src="modalSrc" />
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import Img1 from "../assets/images/gallery1.png";
import Img2 from "../assets/images/gallery2.png";
import Img3 from "../assets/images/gallery3.png";
import Img4 from "../assets/images/gallery4.png";
import Img5 from "../assets/images/gallery5.png";
import Img6 from "../assets/images/gallery6.png";
import Img7 from "../assets/images/gallery7.png";
import Img8 from "../assets/images/gallery8.png";
import Img9 from "../assets/images/gallery9.png";
import Img10 from "../assets/images/gallery10.png";
import Img11 from "../assets/images/gallery11.png";
import Img12 from "../assets/images/gallery12.png";
import Img13 from "../assets/images/gallery13.png";
import Img14 from "../assets/images/gallery14.png";
import Img15 from "../assets/images/gallery15.png";
import Img16 from "../assets/images/gallery16.png";
import Img17 from "../assets/images/gallery17.png";
import Img18 from "../assets/images/gallery18.png";
import Img19 from "../assets/images/gallery19.png";
import Img20 from "../assets/images/gallery20.png";
import Img21 from "../assets/images/gallery21.png";
import Img22 from "../assets/images/gallery22.png";
import Img24 from "../assets/images/gallery24.png";
import Img25 from "../assets/images/gallery25.jpg";
import Img26 from "../assets/images/gallery26.png";




export default {
  name: "Gallery",
  components: {
    Modal
  },
  methods: {
    toogleIsShow(src){
      this.isShow = true
        this.modalSrc = src
        console.log(this.modalSrc)
    }, 
  },
  data(){
    return {
      isShow: false,
      srcVideo: [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img24, Img25, Img26],
      modalSrc: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.galery {
  background-image: url("../assets/images/backgroundParcheminNoir.png");
  background-repeat: repeat;
  width: 100vw;
}

h2 {
  padding-top: 70px;
  margin-bottom: 50px;
  text-align: center;
}

.galery__images {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
}
.galery__images--modal {
  opacity: 0.3;
}

img {
  width: 20vw;
  height: 20vw;
  object-fit: cover;
  overflow: hidden;
}
</style>
