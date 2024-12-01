import { defineConfig } from "vitepress";
import taskLists from "markdown-it-task-lists";
import mncSidebar from "./sidebars/mnc.js";
import dsaSidebar from "./sidebars/dsa.js";




export default defineConfig({
    
  title:"🄿🅁🄾🄱🄻3🄼",
  description:
    "Crowd sourced collection of interview questions of different BD tech companies",
  base: "/",
  // base: "/problems/api/v1/question/",
  cleanUrls: true,
  markdown: {
    config: (md) => {

      md.use(taskLists, { enabled: true });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
   footer: {
  message: `
    Bappa Saha ❤️ Software Engineer. 
  `,
  copyright: '© 2024 CSE 2nd Batch (পৌরাণিক) | All rights reserved.',
},

    logo: "/resource/logo.png" ,
    nav: [
      { text: "Home", link: "/" },
      { text: "DSA", link: "/dsa" },
      { text: "MNC", link: "/mnc/general" },
      { text: "Thesis", link: "/competitions" },
      { text: "ICPC", link: "/competitions" },
      { text: "NCPC", link: "/competitions" },
    ],

    sidebar: [
      ...mncSidebar,
      ...dsaSidebar,
      
      {
        items: [{ text: "CSE competitions", link: "/competitions" }],
      },
      {
        items: [{ text: "ICPC", link: "/competitions" }],
      },

 
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/bappasahabapi",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/bappasaha/",
      },
      
    ],

    search: {
      provider: "local",
    },
    lastUpdated: true,
    head: [
      [
        "script",
        {
          async: "",
          src: "https://www.googletagmanager.com/gtag/js?id=G-P6ZVQMX05B",
        },
      ],
      [
        "script",
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-P6ZVQMX05B');`,
      ],
    ],
  },
});
