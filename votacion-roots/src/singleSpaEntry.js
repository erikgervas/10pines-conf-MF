import singleSpaHtml from 'single-spa-html';
import './VotacionRoots'

const htmlLifecycles = singleSpaHtml({
  template: '<votacion-roots class="vot-main"></votacion-roots>',
  domElementGetter: () => document.getElementById('votacion-roots')
});

export const bootstrap = htmlLifecycles.bootstrap;
export const mount = htmlLifecycles.mount;
export const unmount = htmlLifecycles.unmount;