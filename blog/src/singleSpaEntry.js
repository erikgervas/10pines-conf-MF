import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import App from "./App";

const domElementGetter = () => document.getElementById('blog');

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter
});

export const bootstrap = [ reactLifecycles.bootstrap, ];

export const mount = [ reactLifecycles.mount, ];

export const unmount = [ reactLifecycles.unmount, ];

export const unload = [ reactLifecycles.unload, ];
