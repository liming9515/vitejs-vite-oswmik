import { createApp } from "vue";
import "./style.css";
import { i18n } from "./plugins/i18n";
import App from "./App.vue";

const app = createApp(App);
app.use(i18n);
app.mount("#app");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/public/service.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}
