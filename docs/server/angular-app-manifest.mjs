
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/luminous-essence/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/luminous-essence/home",
    "route": "/luminous-essence"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XUKTH54N.js"
    ],
    "route": "/luminous-essence/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3414, hash: 'c2c63f182b21bd048ff4d371a5d7ec7fba848deddf8f8c1b3b5b741677b9883b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1021, hash: '25993ac52601dc27370a67c48863e5f49eb24fbf7b3bdd4a3ce393e378a0861e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 9499, hash: 'afcdb059b09683af0891f31ca4953416c5dff001dd65940c91faaaa2cc005bc6', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-NZEAAA3P.css': {size: 7124, hash: 'M1j+84+DEJw', text: () => import('./assets-chunks/styles-NZEAAA3P_css.mjs').then(m => m.default)}
  },
};
