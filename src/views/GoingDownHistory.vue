<template>
  <div class="goingDownImage">
    <TextFrame class="text__frame">
      <p ref="text" class="goingDownImage__text">
        Les catacombes sont d’anciennes carrières souterraines
        de l’époque romaine dont on exploitait la pierre calcaire pour
        construire la ville de Paris. En 1786, pour pallier à la saturation
        des cimetières dûe à la peste noire, la ville ordonne de vider les
        cimetières et ses 6 millions de cadavres dans les anciennes carrières
        abandonnées. Deux siècles plus tard, l’utilisation de ces catacombes est
        bien différentes. Dans les années 80 des jeunes redécouvrent l’accès de ces
        galeries et commencent à les explorer. Cet espace innocupé devient un lieu de
        rencontres, de création artistiques et de fêtes. Ces personnes constituent les premiers
        groupes de cataphiles. Avec eux se dessine un nouveau monde parallèle.
      </p>
      <!-- <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        height="50px"
        viewBox="0 0 290.658 290.658"
        style="enable-background: new 0 0 290.658 290.658;"
        xml:space="preserve"
      >
        <line x1="0" y1="130" x2="350" y2="130" stroke="white" stroke-width="10" />
      </svg>-->
    </TextFrame>
    <router-link class="CTAcontinue" :to="{ name: 'PanoramicView' }">
      <CTA msg="Continuer" />
    </router-link>
  </div>
</template>

<script>
import CTA from "@/components/CTA.vue";
import TextFrame from "@/components/TextFrame.vue";


export default {
  name: "GoingDownHistory",
  components: {
    CTA,
    TextFrame
  },
  methods:{
    animEnd(){
      const $text = this.$refs.text;
      $text.addEventListener("webkitAnimationEnd", ()=>{
        $text.style.overflowY = "scroll";
      });
    }
  },
  mounted(){
    this.animEnd();
  }
};
</script>

<style lang="scss" scoped>
svg {
  width: 50px;
  transform: rotate(90deg);
  display: flex;
  margin-left: 44%;
}
.scroll{
  overflow-Y: scroll !important;
}
.goingDownImage {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/images/descente.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  .text__frame {
    width: 60vw;
    display: flex;
    justify-content: center;
    margin: auto;
    overflow: hidden;
  }
  &__text {
    animation: slideUp 30s linear;
    padding: 0px 40px 0px 40px;
    height: 30vh;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    line-height: 8vh;
    font-size: 20px;
  }

  @keyframes slideUp {
    0% {
      transform: translateY(300px);
    }

    100%{
      transform: translateY(-900px);
    }
  }
}

.CTAcontinue {
  position: relative;
  z-index: 3;
  margin-bottom: 5px;
  margin-left: 20px;

  @include tablet-portrait {
    margin-left: 35px;
    margin-bottom: 15px;
  }
}
</style>
