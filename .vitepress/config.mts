import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import { withMermaid } from "vitepress-plugin-mermaid";
import markdownItTextualUml from './textual-uml';

function itemsToIgnore(data) {
  return data.filter((e) => !e.text?.includes(".png") && !e.text?.includes(".svg") && !e.text?.includes(".jpg") && !e.text?.includes(".jpeg") && !(e.text === "contributing"))
}

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Bytehub",
  description: "BIT summaries site.",
  head: [[
    'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-178035298-1',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-178035298-1');",
    ],
  ],
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        path: ".",
        collapsed: true,
        titleFromFile: true,
        deletePrefix: /^\d+\./,
        sideBarItemsResolved: itemsToIgnore,
      })
    ]
  },
  markdown: {
    math: true,
    // lineNumbers: true,
    // theme: 'material-theme-darker'
    // theme: 'dark-plus',
    config(md) {
      md.use(markdownItTextualUml);
    }
  },
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    search: {
      provider:"local",
    },
    editLink: {
      pattern: 'https://github.com/masterkram/bytehub/edit/main/src/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/masterkram/bytehub' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mark-bruderer/' },
      { icon: 'x', link: 'https://x.com/mark_bruderer' },
    ]
  }
})
