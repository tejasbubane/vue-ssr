// router.js
import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import App from "./components/App";

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
