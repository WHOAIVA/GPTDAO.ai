import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
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

  plugins: [
    googleAnalyticsPlugin({
      id: "G-F3LFJCE3RM",
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
