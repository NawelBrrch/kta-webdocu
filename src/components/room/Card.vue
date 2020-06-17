<template>
  <router-link :to="{ name: 'Room', params: { id_room: this.$attrs.id } }">
    <div class="wrapper-card">
      <img :src="mainPic" alt="photo principale des salles perdues" />
      <p>{{name}}</p>
    </div>
  </router-link>
</template>

<script>

export default {
  name: "Card",
  props: {
      mainPic: {},
      name: {},
      room: {},
      describ: {},
      id_room: Number
  },
};
</script>

<style lang="scss" scoped>
.wrapper-card {
  width: 500px;
  height: 250px;
  overflow: hidden;
  position: relative;
  z-index: 9999;
  margin: 0px 50px;

  img {
    height: 100%;
    width: 100%;
    filter: sepia(25%);
    transition: all 0.5s;
  }
  img:hover {
    transform: scale(1.2);
  }
  p {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 40%;
    transition: opacity 2s;
  }
  &:hover {
    p {
      opacity: 1;
    }
  }
}
</style>