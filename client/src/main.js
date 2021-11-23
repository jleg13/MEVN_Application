import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/styles/main.scss";
import "@/assets/fonts/shockwave/shockwave.css";
import { FontAwesomeIcon } from "@/assets/fonts/font-awesome/fontAwesomeIcons";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount("#app");
