import singleSpaHtml from 'single-spa-html';

const htmlLifecycles = singleSpaHtml({
  template: '<votacion-roots></votacion-roots>',
  domElementGetter: () => document.getElementById('votacion-roots')
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;