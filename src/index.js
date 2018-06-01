// app.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

export default new Vue({
  el: "#app",
  router,
  template: '<div id="app"><router-view/></div>'
});
