const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/blog', proxy({
    target: 'http://localhost:3001',
    pathRewrite: { '^/blog(.*)': '$1' },
  }));
};
