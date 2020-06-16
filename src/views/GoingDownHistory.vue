<template>
  <div class="goingDownImage">
  <div class="goingDownImage__text"><p><span>Les catacombes</span> sont d’anciennes carrières souterraines 
  de l’époque romaine dont on exploitait la pierre calcaire pour
   construire la ville de Paris.En 1786, pour pallier à la saturation 
   des cimetières dûe à la peste noire, la ville ordonne de vider les 
   cimetières et ses 6millions de cadavres dans les anciennes carrières 
   abandonnées.Deux siècles plus tard, l’utilisation de ces catacombes est 
   bien différentes. Dans les années 80 des jeunes redécouvrent l’accès de ces 
   galeries et commencent à les explorer. Cet espace innocupé devient un lieu de 
   rencontres, de création artistiques et de fêtes.Ces personnes constituent les premiers
  groupes de cataphiles. Avec eux se dessine un nouveau monde parallèle</p></div> 
    <router-link class="CTAcontinue" :to="{ name: 'PanoramicView' }">
      <CTA msg="Continuer" />
    </router-link>
  </div>
</template>

<script>
import CTA from "@/components/CTA.vue";

export default {
  name: "GoingDownHistory",
  components: {
    CTA,
  },
};
</script>

<style lang="scss" scoped>
// .goingDownImage:hover {
//   transform: scale(1.5);
// }
.goingDownImage {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/images/descente.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  overflow-Y: hidden;
  &__text{
    height: 100vh;
    display: flex;
    align-items: center;
    animation: slideUp 16s;
    p{
      font-size: 50px;
    }
  }

  @keyframes slideUp{
    0%{
      transform: translateY(1000px);
    }
    100%{
      transform: translateY(0px);
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
