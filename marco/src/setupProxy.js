const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/blog', proxy({
    target: 'http://localhost:3001',
    pathRewrite: { '^/blog(.*)': '$1' },
  }));

  app.use('/salapp', proxy({
    target: 'http://localhost:3002',
    pathRewrite: { '^/salapp(.*)': '$1' },
  }));
};
