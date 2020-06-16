<template>
  <div class="goingDownHistory">
    <TextFrame class="goingDownHistory__frame">
      <p ref="text" class="goingDownHistory__text">
        Les catacombes sont d’anciennes carrières souterraines
        de l’époque romaine dont on exploitait la pierre calcaire pour
        construire la ville de Paris. 
        <br/>
        <br/>

        En 1786, pour pallier à la saturation des cimetières dûe à la 
        peste noire, la ville ordonne de vider les
        cimetières et ses 6 millions de cadavres dans les anciennes carrières
        abandonnées. 
        <br/>
        <br/>
        
        Deux siècles plus tard, l’utilisation de ces catacombes est
        bien différentes. Dans les années 80 des jeunes redécouvrent l’accès de ces
        galeries et commencent à les explorer. 
        <br/>
        <br/>

        Cet espace innocupé devient un lieu de
        rencontres, de création artistiques et de fêtes. Ces personnes constituent les premiers
        groupes de cataphiles. Avec eux se dessine un nouveau monde parallèle.
      </p>
    </TextFrame>
    <router-link class="goingDownHistory__CTA" :to="{ name: 'PanoramicView' }">
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

.goingDownHistory {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/images/descente.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  &__frame {
    width: 60vw;
    display: flex;
    justify-content: center;
    margin: auto;
    overflow: hidden;
  }
  &__text {
    animation: slideUp 30s linear;
    padding: 0px 30px 0px 30px;
    height: 30vh;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    line-height: 5vh;
    font-size: 20px;

/*     @include mobile-landscape {
      animation: slideUpMobile 35s linear;
      padding: 0px 10px 0px 10px;
      line-height: 9vh;
      font-size: 14px;
    } */
  }
}

.goingDownHistory__CTA {
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
