import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/collections",
        name: "collections",
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/CollectionsView.vue"
            ),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import("../views/ProfileView.vue"),
    },
    {
        path: "/token/:address",
        name: "token",
        component: () => import("../views/TokenView.vue")
    },
    {
        path: "/brands",
        name: "brands",
        component: () => import("../views/BrandView.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
