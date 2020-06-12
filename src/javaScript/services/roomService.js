import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://kta-api.vhswebs.com/",
  withCredentials: false,
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
});

const id_room = 7;

export default {
  getRoom() {
    return apiClient.get("/room/" + id_room);
  },
  /*   getRoom(id) {
    return apiClient.get("/result" + id);
  }, */
};
