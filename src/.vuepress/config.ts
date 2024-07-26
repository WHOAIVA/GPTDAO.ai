import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "GPTDAO",
      description: "Home page of GPTDAO",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "GPTDAO",
      description: "GPTDAO 主页",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
