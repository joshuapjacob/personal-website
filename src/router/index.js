import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "@/views/Welcome.vue";
import About from "@/views/About.vue";
import Now from "@/views/Now.vue";
import CV from "@/views/CV.vue";
import Projects from "@/views/Projects.vue";
// import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "JOSHUA-PAUL-JACOB",
    component: Welcome,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/now",
    name: "Now",
    component: Now,
  },
  {
    path: "/cv",
    name: "CV",
    component: CV,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  // {
  //   path: "*",
  //   name: "NotFound",
  //   component: NotFound,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
