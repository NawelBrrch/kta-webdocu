<template>
  <div>
    <HeroRoom :room="room" />
    <DocumentationRoom :room="room" />
  </div>
</template>

<script>
import RoomService from "@/javaScript/services/roomService.js";

import HeroRoom from "@/components/room/HeroRoom.vue";
import DocumentationRoom from "@/components/room/DocumentationRoom.vue";

export default {
  name: "Room",
  components: {
    HeroRoom,
    DocumentationRoom,
  },
  props: ["id_room"],
  data() {
    return {
      room: {},
    };
  },
  created() {
    RoomService.getRoom(this.id_room)
      .then((response) => {
        this.room = response.data.result[0];
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
