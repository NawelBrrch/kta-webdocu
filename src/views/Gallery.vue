<template>
  <div class="galery">
    <h2>Galerie photos</h2>
    <div class="galery__images">
      <img
        src="../assets/images/gallery1-min.png"
        alt="photos des catacombes"
      />
      <img
        src="../assets/images/gallery2-min.png"
        alt="photos des catacombes"
      />
      <img src="../assets/images/gallery6.png" alt="photos des catacombes" />
      <img
        src="../assets/images/gallery4-min.png"
        alt="photos des catacombes"
      />
      <img
        src="../assets/images/gallery5-min.png"
        alt="photos des catacombes"
      />
      <img
        src="../assets/images/gallery3-min.png"
        alt="photos des catacombes"
      />
      <img src="../assets/images/gallery7.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery12.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery9.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery14.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery11.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery10.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery8.png" alt="photos des catacombes" />

      <img src="../assets/images/gallery13.png" alt="photos des catacombes" />

      <img src="../assets/images/gallery15.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery16.png" alt="photos des catacombes" />
      <img
        src="../assets/images/gallery17-min.png"
        alt="photos des catacombes"
      />
      <img src="../assets/images/gallery18.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery19.png" alt="photos des catacombes" />
      <img src="../assets/images/gallery20.png" alt="photos des catacombes" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style lang="scss" scoped>
.galery {
  background-image: url("../assets/images/backgroundParcheminNoir.png");
  background-repeat: repeat;
  width: 100vw;
}

.galery__images {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: stretch;
}

img {
  width: 20%;
  height: 20%;
}
</style>
