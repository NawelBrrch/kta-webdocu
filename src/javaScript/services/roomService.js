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
};

//http://kta-api.vhswebs.com/images/val-de-grace/val-de-grace-0.png
//'url' + '/images' + 'poster_principale'
