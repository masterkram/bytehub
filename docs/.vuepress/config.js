const { description } = require('../../package')
const getConfig = require("vuepress-bar");
const dir = __dirname;

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'BITHUB',
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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    ...getConfig(`${dir}/..`, {maxLevel: 10}),
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
  ]
}