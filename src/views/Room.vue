<template>
  <div>
    <HeroRoom :room="room" :mainPic="mainPic" />
    <DocumentationRoom :room="room" :allPics="allPics" />
    <FactRoom/>
  </div>
</template>

<script>
import RoomService from "@/javaScript/services/roomService.js";

import HeroRoom from "@/components/room/HeroRoom.vue";
import DocumentationRoom from "@/components/room/DocumentationRoom.vue";
import FactRoom from "@/components/room/FactRoom.vue";

export default {
  name: "Room",
  components: {
    HeroRoom,
    DocumentationRoom,
    FactRoom
  },
  props: ["id_room"],
  data() {
    return {
      room: {},
      mainPic: "",
      allPics: {},
    };
  },
  created() {
    RoomService.getRoom(this.id_room)
      .then((response) => {
        const apiUrl = "http://kta-api.vhswebs.com/";
        this.room = response.data.result[0];
        this.mainPic =
          apiUrl + "/images" + response.data.result[0].poster_principale;
        this.allPics = response.data.result[0].pics;
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
