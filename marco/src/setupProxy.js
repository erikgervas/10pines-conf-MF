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

  app.use('/secret-pal', proxy({
    target: 'http://localhost:3003',
    pathRewrite: { '^/secret-pal(.*)': '$1' },
  }));

  app.use('/rocapp', proxy({
    target: 'http://localhost:3004',
    pathRewrite: { '^/rocapp(.*)': '$1' },
  }));

  app.use('/loomio', proxy({
    target: 'http://localhost:3006',
    pathRewrite: { '^/loomio(.*)': '$1' },
  }));
};
