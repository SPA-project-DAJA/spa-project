import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Account from "../views/Account.vue";
import Cart from "../views/Cart.vue";
import Dictionary from "../views/Dictionary.vue";
import Contact from "../views/Contact.vue";
import Offer from "../views/Offer.vue";
import English from "../views/languages/English.vue";
import Spanish from "../views/languages/Spanish.vue";
import French from "../views/languages/French.vue";
import Finalize from "../views/finalize.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/dictionary",
      name: "dictionary",
      component: Dictionary,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/offer",
      name: "offer",
      component: Offer,
    },
    {
      path: "/finalize",
      name: "finalize",
      component: Finalize,
    },
    {
      path: "/languages/English",
      name: "English",
      component: English,
    },
    {
      path: "/languages/Spanish",
      name: "Spanish",
      component: Spanish,
    },
    {
      path: "/languages/French",
      name: "French",
      component: French,
    },

    // {
    //   path: "/contact",
    //   name: "contact",
    //   component: ContactView,
    // },

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
