import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://kta-api.vhswebs.com/",
  withCredentials: false,
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
});

export default {
  getRoom() {
    return apiClient.get("/room/7");
  },
  /*   getRoom(id) {
    return apiClient.get("/result" + id);
  }, */
};
