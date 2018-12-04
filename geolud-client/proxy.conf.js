const PROXY_CONFIG = {
  '/app-config': {
    'target': 'http://localhost:4200',
    'bypass': function (req, res) {
      if (req.url === '/app-config') {
        res.end(JSON.stringify({
          apiBase: 'http://localhost:8080',
          wsBase: 'ws://localhost:8080'
        }));
        return true;
      }
    }
  }
};
module.exports = PROXY_CONFIG;
