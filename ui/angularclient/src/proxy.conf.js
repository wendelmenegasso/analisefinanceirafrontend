const PROXY_CONFIG = [
  {
    context: ['/'],
    target: 'http://192.168.15.102:9090',
    secure: true,
    logLevel: 'debug'
  }
]

module.exports = PROXY_CONFIG;
