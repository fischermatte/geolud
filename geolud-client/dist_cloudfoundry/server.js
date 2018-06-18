var express = require('express');
var app = express();


app.use(express.static(__dirname + '/app'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'), {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
    }
  });
});

app.get('/app-config', function (req, res) {
  res.json( '{' +
    '"apiBase": "https://' + process.env.BACKEND_HOST,  + '"' +
    '"wsBase": "wss://' + process.env.BACKEND_HOST + '"' +
    '}');
});
app.listen(8080);
