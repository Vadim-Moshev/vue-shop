import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import CategoryViewer from "../views/CategoryViewer.vue";
import ShopCart from "../views/ShopCart.vue";
import GoodPage from "../views/GoodPage.vue";
import MakeOrder from "../views/MakeOrder.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/category/:categoryIndex",
    name: "category",
    component: CategoryViewer,
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
  },
  {
    path: "/goodpage/:id",
    name: "goodpage",
    component: GoodPage,
  },
  {
    path: "/makeorder",
    name: "makeorder",
    component: MakeOrder,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
