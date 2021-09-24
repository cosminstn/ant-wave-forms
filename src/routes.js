import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/pages/home.vue";
import TextWidgetPage from "/src/pages/components/input/TextWidgetPage.vue";
import WaveFormPage from "/src/pages/components/WaveFormPage.vue";

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
    {
        path: "/components/wave-form",
        component: WaveFormPage,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
