import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./Dashboard.vue";
import Settings from "./Settings.vue";
import App from "./App.vue";

Vue.use(Router);

const router = new Router({
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
    },
    { path: "*", redirect: "/" }
  ]
});

export default router;
