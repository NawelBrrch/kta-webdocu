<template>
  <div>
    <p>Disclaimer</p>
    <router-link :to="{ name: 'Homepage' }" tag="button">
      skip
    </router-link>
  </div>
</template>

<script>
export default { name: "Disclaimer" };
</script>

<style lang="scss" scoped></style>
