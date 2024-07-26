import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar([
  "/",
  "/globogen/",
  {
    text: "生成式人工智能峰会",
    icon: "person-dots-from-line",
    children: [
      {
        text: "2023 硅谷生成式人工智能峰会",
        icon: "/assets/images/sv2023.png",
        link: "https://sv2023.genaisummit.ai/"
      },
      {
        text: "2024 旧金山生成式人工智能峰会",
        icon: "/assets/images/sf2024.png",
        link: "https://genaisummit.ai/"
      },
      {
        text: "2024 硅谷生成式人工智能峰会",
        icon: "/assets/images/sv2024.png",
        link: "https://preview.gptdao.ai"
      }
    ],
  }

]);
