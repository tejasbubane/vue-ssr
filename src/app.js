// app.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router-server";
const RouterView = Vue.component("router-view");

export function createApp() {
  const app = new Vue({
    // inject router into root Vue instance
    router,
    render: h => h(RouterView)
  });

  // return both the app and the router
  return { app, router };
}
