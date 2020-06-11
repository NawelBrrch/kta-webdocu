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
      <router-link :to="{ name: 'Disclaimer' }">
        <CTA msg="Commencer la visite"/>
      </router-link>
    </div>
  </section>
</template>

<script>
import TextFrame from "@/components/TextFrame.vue";
import CTA from "@/components/CTA.vue";

export default {
  name: "Homepage",
  components: {
    TextFrame,
    CTA,
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: center / cover no-repeat url("../assets/images/homepage.png");

  &__presentation {
    width: 75%;
    display: flex;
    justify-content: center;

    &--title {
      text-align: center;
    }

    &--subtitle {
      text-align: center;
    }
  }
}
</style>
