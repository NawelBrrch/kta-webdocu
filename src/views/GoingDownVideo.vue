<template>
  <div class="wayDownPage">
    <section>
      <video
        class="wayDownPage__video"
        autoplay="true"
        preload="auto"
        src="../assets/videos/ouverture-plaque.mp4"
        type="video/mp4"
      >
        >
      </video>
      <div class="wayDowPage__progressBarOutside">
        Passer la vidéo
        <div class="wayDowPage__progressBarInside"></div>
      </div>
      <router-link :to="{ name: 'GoingDownHistory' }" tag="button">
        Skip
      </router-link>
    </section>
  </div>
</template>

<script>
export default { name: "GoingDownVideo" };
</script>

<style lang="scss" scoped>
.wayDownPage {
  height: 100vh;
  width: 100%;
}

.wayDownPage__video {
  width: 100%;
  height: 95vh;
  object-fit: cover;
}

.wayDowPage__progressBarOutside {
  border-radius: 1px;
  border: 1.3px solid $yellow;
  width: 160px;
  height: 50px;
  text-align: center;
  background-color: none;
}

.wayDowPage__progressBarInside {
  height: 100%;
  background-color: $yellow;
}
</style>
