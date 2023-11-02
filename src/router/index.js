import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { useUserStore } from "../stores/userStore";
import { supabase } from "../webClient/supabase";

router.beforeEach((to, from, next) => {
  // get current user info
  const currentUser = supabase.auth.user();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("/");
  else if (!requiresAuth && currentUser) next();
  else next();
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      beforeEnter: requiresAuth,
    },
    {
      path: "/project/:projectId",
      name: "project",
      component: () => import("../views/ProjectView.vue"),
      beforeEnter: requiresAuth,
    },
    {
      path: "/interactive-images/:projectId",
      name: "interactive-image",
      component: () => import("../views/Interactive.vue"),
    },
    {
      path: "/try",
      name: "try",
      component: () => import("../views/Try.vue"),
    },
    {
      path: "/try1",
      name: "try1",
      component: () => import("../views/Try1.vue"),
    },
    {
      path: "/try2",
      name: "try2",
      component: () => import("../views/Try2.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
