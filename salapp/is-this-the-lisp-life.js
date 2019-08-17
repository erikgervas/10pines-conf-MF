import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { salapp } from 'shadow-cljs/salapp.main'

const domElementGetter = () => document.getElementById('salapp');

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: salapp,
  domElementGetter
});

export const bootstrap = [ reactLifecycles.bootstrap, ];

export const mount = [ reactLifecycles.mount, ];

export const unmount = [ reactLifecycles.unmount, ];

export const unload = [ reactLifecycles.unload, ];
