import Vue from "vue";
import VueRouter from "vue-router";

import Disclaimer from "@/views/Disclaimer.vue";
import Homepage from "@/views/Homepage.vue";
import Equipment from "@/views/Equipment.vue";
import GoingDownVideo from "@/views/GoingDownVideo.vue";
import GoingDownHistory from "@/views/GoingDownHistory.vue";
import PanoramicView from "@/views/PanoramicView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Disclaimer",
    component: Disclaimer,
  },
  {
    path: "/home",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/equipment",
    name: "Equipment",
    component: Equipment,
  },
  {
    path: "/goingDownVideo",
    name: "GoingDownVideo",
    component: GoingDownVideo,
  },
  {
    path: "/goingDownHistory",
    name: "GoingDownHistory",
    component: GoingDownHistory,
  },
  {
    path: "/panorama",
    name: "PanoramicView",
    component: PanoramicView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
