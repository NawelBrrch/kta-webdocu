<template>
  <div class="wrapper" v-on:mousemove="(event) => rotateImageDown(event)">
    <HeroRoomUnofficial />
    <Card
      v-for="(i, index ) in rooms"
      :key="i"
      :id="id[index].id"
      :mainPic="getMainPic(mainPic[index].poster_principale)"
      :describ="describ[index].room_describ"
      :name="name[index].room_name"
      class="cards"
      ref="card"
    />
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
        Card
  },
  methods: {
      getMainPic(pathimage){
          return "http://kta-api.vhswebs.com/images" + pathimage;
      },
      rotateImageDown(event){
        const ref = Object.values(this.$refs.card)
        ref.forEach((el , i) => {
          el.$el.style.transform = "rotate(" + event.pageY / 50 + "deg)"
          // el.$el.style.transform = "rotateX(" + event.pageX / 100 + "deg)"

          // console.log(el.$el);
          })        
      }
  },
  data() {
    return {
      rooms: {},
      id: {},
      mainPic: {},
      name: {},
      describ: {}
    };
  },
   created() {
    RoomService.getUnofficialRoom()
      .then((response) => {
        const apiUrl = "http://kta-api.vhswebs.com/";
        this.rooms = response.data.result;
        this.id =  Object.values(this.rooms)
        this.mainPic =  Object.values(this.rooms)
        this.name = Object.values(this.rooms)
        this.describ = Object.values(this.rooms)
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
      
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: black;
}
.cards:nth-child(odd) {
  display: flex;
  justify-content: flex-end;
}
.cards:nth-child(even) {
  display: flex;
  justify-content: flex-start;
}
</style>