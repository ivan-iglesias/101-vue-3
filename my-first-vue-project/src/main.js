import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.provide('environment', 'PROD')

app.mount("#app");