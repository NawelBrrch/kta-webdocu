<template>
  <div>
    <RoomFacts />
    <div>
      <h1>La face cachée Des catacombes</h1>
    </div>
    <div>
      <router-link :to="{ name: 'Disclaimer' }" tag="button">
        Commencer la descente
      </router-link>
    </div>
  </div>
</template>

<script>
import RoomFacts from "@/components/RoomFacts.vue";

export default {
  name: "Homepage",
  components: {
    RoomFacts,
  },
};
</script>

<style lang="scss" scoped></style>
