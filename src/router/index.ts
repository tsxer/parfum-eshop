import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/ContactView.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue")
  },
  {
    path: "/products",
    name: "products-all",
    component: () => import("@/views/CollectionView.vue")
  },
  {
    path: "/products/:category",
    name: "products-category",
    component: () => import("@/views/CollectionView.vue"),
    props: true
  },
  {
    path: "/product/:id",
    name: "product-page",
    component: () => import("@/views/ProductPageView.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFoundView.vue")
  },
  {
    path: "/checkout-success",
    name: "checkout-success",
    component: () => import("@/views/CheckoutSuccessView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
