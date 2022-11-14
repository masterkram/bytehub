export function addGoogleTag(i, s) {
  const TAG_NAME = "script";
  const SRC = "https://www.googletagmanager.com/gtag/js?id=G-P1QSV1DTFQ";
  const KEY = "ga";

  i["GoogleAnalyticsObject"] = KEY;

  //   i[r] =
  //     i[r] ||
  //     function() {
  //       (i[r].q = i[r].q || []).push(arguments);
  //     };
  //   i[r].l = 1 * new Date();

  let a = s.createElement(TAG_NAME);
  let m = s.getElementsByTagName(TAG_NAME)[0];

  a.async = 1;
  a.src = SRC;
  m.parentNode.insertBefore(a, m);
}
