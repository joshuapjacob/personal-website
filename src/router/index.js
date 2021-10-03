import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import CV from "@/views/CV.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/",
  },
  {
    path: "/",
    name: "JOSHUA-PAUL-JACOB",
    component: Home,
  },
  {
    path: "/cv",
    name: "CV",
    component: CV,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
