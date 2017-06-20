module.exports = {
  app: {
    id: '1',
    version: '1.0.0',
  },
  SESSION_TOKEN_KEY: 'sessionToken',
  server: {
    production: {
      url: 'https://api.pai.bigins.cn/',
    },
    qa: {
      url: 'https://qa.api.pai.bigins.cn/',
    },
  },
};
