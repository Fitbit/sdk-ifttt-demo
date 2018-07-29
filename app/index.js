import document from "document";
import * as messaging from "messaging";

const btn = document.getElementById("btn");
const eventName = "demo_trigger";

btn.addEventListener("click", () => {
  sendEventIfReady(eventName);
});

function sendEventIfReady(eventName) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send({eventName: eventName});
  }
}
