<template>
  <div>
    <HeroRoom :room="room" :mainPic="mainPic" />
    <DocumentationRoom :room="room" :allPics="allPics" />
    <RoomFacts
      v-for="(fact, idx, ids) in facts"
      :key="idx"
      :fact="fact"
      :ids="ids"
    />
  </div>
</template>

<script>
import RoomService from "@/javaScript/services/roomService.js";

import HeroRoom from "@/components/room/HeroRoom.vue";
import DocumentationRoom from "@/components/room/DocumentationRoom.vue";
import RoomFacts from "@/components/room/RoomFacts.vue";

export default {
  name: "Room",
  components: {
    HeroRoom,
    DocumentationRoom,
    RoomFacts,
  },
  props: ["id_room"],
  data() {
    return {
      room: {},
      mainPic: "",
      allPics: {},
      facts: {},
      ids: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
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
        this.facts = response.data.result[0].picsAndFacts;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
  mounted() {
    this.parallax();
  },
  methods: {
    parallax: function () {
      //let docuImg = document.querySelector(".documentation__content--img");
      let docuTxt = document.querySelector(".documentation__content--text");
      let hero = document.querySelector(".hero");
      //console.log(docuImg, docuTxt, hero);

      window.addEventListener("scroll", function () {
        let scrolled = window.pageYOffset;
        let rate = scrolled * 0.5;
        if (scrolled > hero.clientHeight) {
          docuTxt.style.transform = "translateY(" + -rate + "px)";
        }
        //console.log(divHeroHeight, scrolled);
        //let rate = scrolled * -10;
        //target.style.transform = "translateY(" + rate + "px)";
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
