import { createApp } from "./app";

const app = createApp().app;

// this assumes App.vue template root element has `id="app"`
app.$mount("#app");
