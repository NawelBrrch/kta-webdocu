<template>
  <div class="hey">
    Video Going Down YOYO
    <router-link :to="{ name: 'GoingDownHistory' }" tag="button">
      Skip
    </router-link>
  </div>
</template>

<script>
export default { name: "GoingDownVideo" };
</script>

<style lang="scss" scoped>
.hey {
  color: white;
}
</style>
