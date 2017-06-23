const config = require('../../config.js');
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.base.conf');
const http = require('http');
const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: '/dist/',
  stats: {
    colors: true,
    chunks: false,
  },
});

app.use(require('connect-history-api-fallback')());

app.use(devMiddleware);

app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  reload: true,
  path: '/__webpack_hmr',
  heartbeat: 1,
}));

app.use('/assets', express.static('../../public'));

if (require.main === module) {
  const server = http.createServer(app);
  server.listen(3000,  () => {
    console.log('Listening on %j', server.address());
  });
}
