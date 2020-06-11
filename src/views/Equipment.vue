<template>
  <div class="equipment">
    <p class="equipment__text">
      Pour une meilleure expérience attrapez votre équipement,<br />
      éteignez les <strong class="text__glow">lumières</strong>, et branchez
      votre <strong class="text__animation">casque</strong>
    </p>
    <router-link :to="{ name: 'GoingDownVideo' }" tag="button">
      GO DOOOOOWN
    </router-link>
  </div>
</template>

<script>
export default { name: "Equipment" };
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
  width: 60vw;
  text-align: center;
  margin-bottom: 5%;
}

.text__glow {
  text-shadow: 0 0 20px #efede5, 0 0 15px #efede5, 0 0 20px #f5eabd,
    0 0 25px #efede5, 0 0 30px #f5eabd, 0 0 35px #f5eabd;
}

.text__animation {
  animation: 3s ease-in 1s infinite reverse both running slidein;
}
</style>
