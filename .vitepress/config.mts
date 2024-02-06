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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bytehub' },
      { icon: 'linkedin', link: 'https://linkedin/mark_bruderer' },
      { icon: 'x', link: 'https://x.com/mark_bruderer' },
    ]
  }
})
