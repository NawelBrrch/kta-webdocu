<template>
  <div>
    <HeroRoom :key="room.id" :room="room" />
  </div>
</template>

<script>
import HeroRoom from "@/components/room/HeroRoom.vue";
import RoomService from "@/javaScript/services/roomService.js";
export default {
  name: "Room",
  components: {
    HeroRoom,
  },
  data() {
    return {
      room: {},
    };
  },
  created() {
    RoomService.getRoom()
      .then((response) => {
        this.room = response.data.result[0];
        console.log(this.room);
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>

<style lang="scss" scoped>
div {
  color: white;
}
</style>
