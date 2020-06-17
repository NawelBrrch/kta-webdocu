<template>
  <div class="notFound">
    <h1>ERREUR 404</h1>
    <router-link :to="{ name: 'KtaMap' }">
      <CTA msg="Revenir à la carte" />
    </router-link>
  </div>
</template>


<script>
import CTA from "@/components/CTA.vue";

export default {
  name: "NotFound",
  components: {
      CTA,
  }
};
</script>


<style lang="scss" scoped>
.notFound {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>