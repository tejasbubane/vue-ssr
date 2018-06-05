// Client-side bundle for production use
// along with SSR
import createApp from "./server-app";

const app = createApp().app;

// this assumes App.vue template root element has `id="app"`
app.$mount("#app");
