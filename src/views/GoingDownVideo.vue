<template>
  <div>
    Video Going Down
    <router-link :to="{ name: 'GoingDownHistory' }" tag="button">
      Skip
    </router-link>
  </div>
</template>

<script>
export default { name: "GoingDownVideo" };
</script>

<style lang="scss" scoped></style>
