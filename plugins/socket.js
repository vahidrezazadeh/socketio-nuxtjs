import { io } from "socket.io-client";
import Vue from "vue";

const socket = new io("Your Socket.io Address", {
  transports: ["websocket"],
});
socket.connect();

socket.on("connect", (data) => {
  console.log("Connect To Socket");
});
export default ({ app }, inject) => {
  inject("socket", Vue.observable({ main: socket }));
};
