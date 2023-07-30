import { createApp } from "vue";
import { createRouter } from "vue-router";
import { history } from "./shared/history";
import { routes } from "./config/routes";
import { App } from "./App";

const router = createRouter({ history, routes });

const app = createApp(App);
app.use(router);

app.mount("#app");
