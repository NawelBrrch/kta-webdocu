<template>
  <div class="equipment">
    <h3 class="equipment__title">
      Pour une meilleure expérience attrapez votre équipement,<br />éteignez les
      <em classe="title__glow">lumières</em>, et branchez votre
      <em class="title__animation">casque</em>
    </h3>
    <TextFrame class="equipment__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </TextFrame>
    <router-link :to="{ name: 'GoingDownVideo' }">
      <CTA msg="Commencer la descente" />
    </router-link>
  </div>
</template>

<script>
import TextFrame from "@/components/TextFrame.vue";
import CTA from "@/components/CTA.vue";

export default {
  name: "Equipment",
  components: {
    TextFrame,
    CTA,
  },
};
</script>

<style lang="scss" scoped>
.equipment {
  background-image: url("../assets/images/backgroundEquipment.png");
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.equipment__title {
  width: 90vw;
  text-align: center;
  line-height: 200%;
  margin-bottom: 36px;
  color: $white;
  position: relative;
  overflow: hidden;
}

.title__glow {
  animation: light 2s infinite alternate;
}

.title__animation {
  position: relative;
  right: 500px;
  animation-name: slideIn;
  animation-duration: 2s;
  animation-delay: 3s;
  transition-timing-function: ease;
  animation-fill-mode: forwards;

  @include tablet-portrait {
    right: 700px;
  }
  @include desktop {
    right: 900px;
  }
}

.equipment__text {
  width: 60vw;
  margin-bottom: 3%;
}
</style>
