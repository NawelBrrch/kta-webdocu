import axios from "axios";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "http://kta-api.vhswebs.com/";

const apiClient = axios.create({
  baseURL: proxyUrl + apiUrl,
  withCredentials: false,
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
});

export default {
  getRoom(id) {
    return apiClient.get("/room/" + id);
  },

  getMainPic(pathImage) {
    return apiClient.get("/images" + pathImage);
  },
};
