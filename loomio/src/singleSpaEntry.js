import preact from 'preact';
import singleSpaPreact from 'single-spa-preact';
import App from './components/app';

const preactLifecycles = singleSpaPreact({
  preact,
  rootComponent: App,
  domElementGetter: () => document.getElementById('loomio')
});

export const bootstrap = preactLifecycles.bootstrap;
export const mount = preactLifecycles.mount;
export const unmount = preactLifecycles.unmount;
