import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
});

export default {
  getRooms() {
    return apiClient.get("/result");
  },
  /*   getRoom(id) {
    return apiClient.get("/result" + id);
  }, */
};
