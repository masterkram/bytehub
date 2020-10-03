const { description } = require('../../package')
const {nav, sidebar} = require("vuepress-bar")(`${__dirname}/..`, {maxLevel: 10});

sidebar.pop(); // remove contributing from auto sidebar.

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BYTEHUB',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    nav: [{text: 'Github', link: 'https://github.com/masterkram/bytehub'}],
    sidebar,
    sidebarDepth: 0,
    smoothScroll: true,
    lastUpdated: 'Last Updated'
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/last-updated',
    '@vuepress/register-components',
    ['@vuepress/search', {
      searchMaxSuggestions: 4
    }],
    'vuepress-plugin-smooth-scroll',
    '@vuepress/nprogress',
    'vuepress-plugin-mathjax',
    'vuepress-plugin-mermaidjs',
    '@vuepress/plugin-google-analytics', {
      ga: 'UA-178035298-1'
    }],
}