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
      <router-link
        :to="{ name: 'GoingDownHistory' }"
        class="wayDowPage__progressBarOutside"
      >
        <div class="wayDowPage__progressBarInside">Passer la vidéo</div>
      </router-link>
    </section>
  </div>
</template>

<script>
export default { name: "GoingDownVideo" };
</script>

<style lang="scss" scoped>
.wayDownPage {
  position: relative;
  height: 100vh;
  width: 100%;
}

.wayDownPage__video {
  width: 100%;
  height: 95vh;
  object-fit: cover;
}

.wayDowPage__progressBarOutside {
  position: absolute;
  top: 75%;
  left: 5%;
  border-radius: 1px;
  border: 1.3px solid $yellow;
  width: 160px;
  height: 50px;
  text-align: center;
  background-color: none;
}

.wayDowPage__progressBarInside {
  height: 100%;
  width: 50%;
  background-color: $yellow;
}
</style>
