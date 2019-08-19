import * as singleSpa from 'single-spa';

export default async function registerAllApplications() {

  await Promise.all([
    loadApp('blog', '/blog/singleSpaEntry.js'),
    loadApp('salapp', '/salapp/is-this-the-lisp-life.js'),
    loadApp('secret-pal', '/secret-pal/singleSpaEntry.js'),
  ]);

  singleSpa.start();
}

const loadApp = (name, url) => {
  singleSpa.registerApplication(name, () => window.SystemJS.import(url), () => true);
};
