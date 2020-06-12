<template>
  <div class="exit">
    <div class="exit__art"> Arrêté préfectoral du 2 novembre 1955</div>



    <div class="exit__art"> Art.1. Il est interdit à toute personne non munie d'une autorisation émanant de l'Inspection Générale des Carrières d'ouvrir les portes et trappes d'accès aux escaliers et puits à échelons ou autres des anciennes carrières, de descendre dans ces ouvrages, de pénétrer et de circuler dans les vides des anciennes carrières s'étendant sous l'emprise des voies publiques de la Ville de Paris.</div>

    <div class="exit__art"> Art.2. Les contraventions au présent arrêté seront constatées par procès verbaux des commissaires de police et autres officiers de police judiciaire et des agents de l'Inspection Générale des Carrières ayant qualité pour verbaliser. Elles seront déférées aux tribunaux compétents. </div>

    <div class="exit__art"> Art.3. Le directeur de la police municipale et l'Ingénieur Général des Mines, Inspecteur Général des Carrières de la Seine sont chargés de l'exécution du présent arrêté qui sera inséré au recueil des actes administratifs et affiché dans Paris. </div>


    <div class="exit__art"> Fait à Paris, le 2 novembre 1955, Le Préfet de Police Dubois. </div>

    <router-link :to="{ name: 'Homepage' }">
    <CTA msg="Revenir à l'accueil" />
    </router-link>
  
</div>

</template>

<script>
import CTA from "@/components/CTA.vue";

export default {
  name: "Exit",
  components: {
    CTA,
  },
};
</script>

<style lang="scss" scoped>
.exit {
  @include exit-style;
  background-image: url("../assets/images/backgroundParcheminNoir.png");
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__art {
    margin-bottom: 2%;
    width: 90vw;
    text-align: center;
    @include tablet-landscape {
      margin-bottom: 4%;
    }
  }
}

</style>
