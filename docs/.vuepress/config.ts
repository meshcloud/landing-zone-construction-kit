import * as fs from "fs";
import * as path from "path";

import { defineUserConfig } from "@vuepress/cli";
import {
  defaultTheme,
  NavbarConfig,
  SidebarConfig,
} from "@vuepress/theme-default";
import { shikiPlugin } from "@vuepress/plugin-shiki";

export const navbarEn: NavbarConfig = [
  {
    text: "Getting Started",
    link: "/tutorial/",
  },
  {
    text: "Guides",
    link: "/guide/",
  },
  {
    text: "Reference",
    link: "/reference/repository",
  },
];

export const sidebar: SidebarConfig = {
  "/reference/": [
    {
      text: "Reference",
      children: [
        '/reference/repository.md',
        '/reference/foundation.md',
        '/reference/kit-module.md',
      ]
    },
  ],
  "/guide/": [
    {
      text: "Guides",
      children: [
        '/guide/README.md',
        '/guide/compliance.md'
      ]
    },
  ],
  "/tutorial/": [
    {
      text: "Getting Started",
      children: [
        '/tutorial/README.md',
        '/tutorial/compliance-control.md'
      ]
    },
  ]
};

export default defineUserConfig({
  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "Landing Zone Construction Kit",
      description: "build and deploy modular landing zones",
    },
  },

  // configure default theme
  theme: defaultTheme({
    logo: "/images/hero.png",
    repo: "meshcloud/landing-zone-construction-kit",
    docsDir: "docs",
    darkMode: false,

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      "/": {
        navbar: navbarEn,
        sidebar: sidebar,
        editLinkText: "Edit this page on GitHub",
      },
    },
  }),

  plugins: [shikiPlugin({ theme: "dark-plus" })],
});