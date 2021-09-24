import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/pages/home.vue";
import TextWidgetPage from "/src/pages/components/input/TextWidgetPage.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/components/input/text-widget",
        component: TextWidgetPage,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
