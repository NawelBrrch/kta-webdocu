<template>
  <section class="homepage">
    <div class="homepage__presentation">
      <TextFrame>
        <h1 class="homepage__presentation--title">
          Les Catacombes
        </h1>
        <h2 class="homepage__presentation--subtitle">
          La face cachée de Paris
        </h2>
      </TextFrame>
    </div>
    <div>
      <router-link :to="{ name: 'Disclaimer' }" tag="button">
        Commencer la descente
      </router-link>
    </div>
  </section>
</template>

<script>
import TextFrame from "@/components/TextFrame.vue";

export default {
  name: "Homepage",
  components: {
    TextFrame,
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: center / cover no-repeat url("../assets/images/homepage.png");

  &__presentation {
    width: 70%;
    &--title {
      text-align: center;
    }

    &--subtitle {
      text-align: center;
    }
  }
}
</style>
