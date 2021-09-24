import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import TextWidget from "./components/input/TextWidget.vue";
import DateWidget from "./components/input/DateWidget.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);

createApp(App)
    .use(router)
    .use(hljsVuePlugin)
    .component("TextWidget", TextWidget)
    .component("DateWidget", DateWidget)
    .mount("#app");
