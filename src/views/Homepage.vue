<template>
  <div>
    <div>
      <h1>La face cachée des Catacombes de Paris</h1>
    </div>
    <div>
      <router-link :to="{ name: 'Equipment' }" tag="button">
        Commencer la descente
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
};
</script>

<style lang="scss" scoped></style>
