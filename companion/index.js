import * as messaging from "messaging";
import { settingsStorage } from "settings";

messaging.peerSocket.addEventListener("message", (evt) => {
  if (evt.data) {
    let apiKey = settingsStorage.getItem("apiKey");
    let eventName = evt.data.eventName;
    if (apiKey && eventName) {
      apiKey = JSON.parse(apiKey).name;
      let url = `https://maker.ifttt.com/trigger/${eventName}/with/key/${apiKey}`
      fetch(url, {
        method: "POST",
        mode: "no-cors"
      });
    } else {
      console.log("You must configure the API key in Settings.")
    }
  }
});
