<template>
  <div>
    <router-link :to="{ name: 'Room', params: { id_room: '1' } }">
      room1
    </router-link>
    <router-link :to="{ name: 'Room', params: { id_room: '2' } }">
      room2
    </router-link>
    <router-link :to="{ name: 'Room', params: { id_room: '3' } }">
      room3
    </router-link>
    <router-link :to="{ name: 'Room', params: { id_room: '4' } }">
      room4
    </router-link>
    <router-link :to="{ name: 'Room', params: { id_room: '5' } }">
      room5
    </router-link>
    <router-link :to="{ name: 'Room', params: { id_room: '6' } }">
      room6
    </router-link>
    <router-link :to="{ name: 'Room', params: { id_room: '7' } }">
      room7
    </router-link>
  </div>
</template>

<script>
export default { name: "KtaMap" };
</script>

<style lang="scss" scoped>
div {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
