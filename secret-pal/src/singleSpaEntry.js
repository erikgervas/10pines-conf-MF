import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#secret-pal',
    render: h => h(App)
  }
});

export const bootstrap = [ vueLifecycles.bootstrap ];

export const mount = (props) => vueLifecycles.mount(props)

export const unmount = [ vueLifecycles.unmount ];
