<template>
  <div class="wrapper" v-on:mousemove="(event) => rotateImageDown(event)">
    <HeroRoomUnofficial />
    <div class="cardsContainer">
      <Card
        v-for="(i, index) in rooms"
        :key="index"
        :id="id[index].id"
        :mainPic="getMainPic(mainPic[index].poster_principale)"
        :describ="describ[index].room_describ"
        :name="name[index].room_name"
        class="cards"
        ref="card"
      />
    </div>
  </div>
</template>

<script>
import RoomService from "@/javaScript/services/roomService.js";
import HeroRoomUnofficial from "@/components/room/HeroRoomUnofficial.vue";
import Card from "@/components/room/Card.vue";

export default {
  name: "UnofficialRoom",
  components: {
    HeroRoomUnofficial,
    Card,
  },
  methods: {
    getMainPic(pathimage) {
      return "http://kta-api.vhswebs.com/images" + pathimage;
    },
  },
  data() {
    return {
      rooms: {},
      id: {},
      mainPic: {},
      name: {},
      describ: {},
    };
  },
  created() {
    RoomService.getUnofficialRoom()
      .then((response) => {
        this.rooms = response.data.result;
        this.id = Object.values(this.rooms);
        this.mainPic = Object.values(this.rooms);
        this.name = Object.values(this.rooms);
        this.describ = Object.values(this.rooms);
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: rgb(26, 25, 25);
}

.cardsContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.cards {
  flex: 0 1 300px;
  margin-bottom: 30px;
}

// .cards:nth-child(odd) {
//   display: flex;
//   justify-content: flex-end;
// }
// .cards:nth-child(even) {
//   display: flex;
//   justify-content: flex-start;
// }
</style>
