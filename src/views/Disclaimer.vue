<template>
  <div>
    <h1>Disclaimer</h1>
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
h1 {
  //@include h1-mobile-style;
  font-size: 12px;
  color: black;
}

.disclaimer__school {
  @include p-mobile-style;
}
</style>
