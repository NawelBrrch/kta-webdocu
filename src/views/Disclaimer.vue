<template>
  <div class="loadingPage">
    <h2 class="disclaimer__title">Avertissement</h2>
    <p class="disclaimer__part">
      Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus
      Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet
      d'une demande de droit d'utilisation. Ce site ne sera, en aucun cas,
      exploité à des fins commerciales et ne sera pas publié.
    </p>
    <p class="disclaimer__part">
      De plus, tous les lieux présentés ont été visités par des personnes
      aguerries, les catacombes sont un endroit dangereux et il est interdit de
      s’y aventurer par arrêté préfectoral. Pour des raisons de sécurité, la
      carte que vous trouverez sur le site est fictive, mais les lieux présentés
      sont bien réels.
    </p>
    <router-link :to="{ name: 'Equipment' }">
      <CTA msg="Continuer" class="button" />
    </router-link>
  </div>
</template>

<script>
import CTA from "@/components/CTA.vue";

export default {
  name: "Disclaimer",
  components: {
    CTA,
  },
};
</script>

<style lang="scss" scoped>
.loadingPage {
  background-image: url("../assets/images/backgroundParcheminNoir.png");
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.disclaimer__title {
  margin-bottom: 3%;
}

.disclaimer__part {
  margin-bottom: 3%;
  width: 80vw;
  text-align: center;

  @include desktop {
    width: 800px;
  }
}

/* .button {
  opacity: 0;
  animation-name: button;
  animation-duration: 1s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
} */
</style>
