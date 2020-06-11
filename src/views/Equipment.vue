<template>
  <div class="equipment">
    <p class="equipment__text">
      Pour une meilleure expérience attrapez votre équipement, éteignez les
      lumières, et branchez votre casque.
    </p>
    <router-link :to="{ name: 'GoingDownVideo' }" >
      <CTA msg="Commencer la descente"/>
    </router-link>
  </div>
</template>

<script>
import CTA from "@/components/CTA.vue";

export default { 
  name: "Equipment",
  components: {
    CTA,
  }
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

.equipment__text {
  width: 50vw;
  text-align: center;
}
</style>
