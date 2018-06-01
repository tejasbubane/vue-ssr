// router.js
import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import App from "./App.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "app",
      component: App
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});
