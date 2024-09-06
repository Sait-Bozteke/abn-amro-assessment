import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/AppRouter";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia)

app.mount("#app");
