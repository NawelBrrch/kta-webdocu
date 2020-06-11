<template>
  <div class="loadingPage">
    <h2 class="disclaimer__title">Disclaimer</h2>
    <p class="disclaimer__school">
      Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus
      Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait l'objet
      d'une demande de droit d'utilisation. Ce site ne sera, en aucun cas,
      exploité à des fins commerciales et ne sera pas publié.
    </p>
    <p class="disclaimer__kta">
      De plus, tous les lieux présentés ont été visités par des personnes
      aguerries, les catacombes sont un endroit dangereux et il est interdit de
      s’y aventurer par arrêté préfectoral. Pour des raisons de sécurité, la
      carte que vous trouverez sur le site est fictive, mais les lieux présentés
      sont bien réels.
    </p>
    <router-link :to="{ name: 'Equipment' }" tag="button">
      skip
    </router-link>
  </div>
</template>

<script>
export default { name: "Disclaimer" };
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
  margin-bottom: 5%;
}

.disclaimer__school {
  margin-bottom: 5%;
  width: 80vw;

  @include desktop {
    width: 60vw;
  }
}

.disclaimer__kta {
  margin-bottom: 5%;
  width: 80vw;

  @include desktop {
    width: 60vw;
  }
}
</style>
