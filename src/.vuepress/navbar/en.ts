import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/summit/",
  {
    text: "GenAI Summit",
    icon: "person-dots-from-line",
    children: [
        {
            text: "GenAI Summit Silicon Valley 2023",
            icon: "person-dots-from-line",
            link: "https://sv2023.genaisummit.ai/"
        },
        {
            text: "GenAI Summit San Francisco 2024",
            icon: "person-dots-from-line",
            link: "https://genaisummit.ai/"
        },
        {
            text: "GenAI Summit Silicon Valley 2024",
            icon: "person-dots-from-line",
            link: "https://preview.gptdao.ai"
        }
    ],
  }

]);
