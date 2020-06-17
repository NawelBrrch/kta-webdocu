<template>
  <div class="loading">
    <img :src="Loader" alt="Loader" />
  </div>
</template>


<script>
import Loader from "../assets/gif/loader2.gif"
export default {
  name: "Loader",
  props: {
  },
  data(){
      return {
          Loader: Loader
      }
  }
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  img {
    height: 100px;
  }
}
</style>