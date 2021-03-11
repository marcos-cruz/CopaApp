const PROXY_CONFIG = [
    {
      context: ['/api'],
      target: 'https://localhost:44368/',
      secure: false,
      loglevel: 'debug',
    }
  ];
  
  module.exports = PROXY_CONFIG;