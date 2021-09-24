# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# Configure Ant for vite vue3
Install required packages
```bash
npm i -D vite-plugin-components
npm i ant-design-vue@next
```

Configure ant design plugin

vite.config.js
```javascript

import ViteComponents, { AntDesignVueResolver } from "vite-plugin-components";

//...
plugins: [
    vue(),
    ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()],
    }),
],
```



## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
