<template>
  <div>
    Room
  </div>
</template>

<script>
import roomService from "@/javaScript/services/roomService.js";
export default {
  name: "Room",
  data() {
    return {
      room: [],
    };
  },
  created() {
    roomService
      .getRooms()
      .then((response) => {
        this.room = response.data;
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
