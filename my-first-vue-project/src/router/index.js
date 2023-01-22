import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import LocalStorageView from "@/views/LocalStorageView.vue";
import PropsEmitsView from "@/views/PropsEmitsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
        path: "/contact",
        name: "contact",
        component: ContactView,
    },
    {
        path: "/local-storage",
        name: "local-storage",
        component: LocalStorageView,
    },
    {
        path: "/props-emits",
        name: "props-emits",
        component: PropsEmitsView,
    }
  ],
});

export default router;
