/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import { addGoogleTag } from "./config/googleAnalytics";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // Google analytics integration
  if (
    process.env.NODE_ENV === "production" &&
    GA_ID &&
    typeof window !== "undefined"
  ) {
    addGoogleTag(window, document);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-P1QSV1DTFQ");

    // router.afterEach(function(to) {
    //   ga("set", "page", router.app.$withBase(to.fullPath));
    //   ga("send", "pageview");
    // });
  }
};
