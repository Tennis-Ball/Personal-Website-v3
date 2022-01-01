import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import ParticlesVue from "particles.vue3";

createApp(App).use(router).use(ParticlesVue).mount("#app");
