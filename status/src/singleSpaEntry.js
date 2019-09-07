import { render } from 'inferno';
import { createElement } from 'inferno-create-element';
import rootComponent from './App';
import singleSpaInferno from 'single-spa-inferno';

const Inferno = { render };

const infernoLifecycles = singleSpaInferno({
  Inferno,
  createElement,
  rootComponent,
  domElementGetter: () => {
    const statusContainer = document.getElementById('status');
    statusContainer.removeChild(statusContainer.firstChild);
    return statusContainer;
  },
});

export const bootstrap = infernoLifecycles.bootstrap;
export const mount = infernoLifecycles.mount;
export const unmount = infernoLifecycles.unmount;
