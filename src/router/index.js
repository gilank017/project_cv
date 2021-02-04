import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
const About = () => import("@/views/About");
const Work = () => import("@/views/Work");
const Contact = () => import("@/views/Contact");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Work",
    name: "Work",
    component: Work,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
