const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const BACKEND_HOST = process.env.BACKEND_HOST || 'localhost:8000';
const BACKEND_IS_SSL = process.env.BACKEND_IS_SSL || false;

const app = express();
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

app.get('/app-config', function (req, res) {
  res.status(200).json({
    'apiBase': (BACKEND_IS_SSL ? 'https://' : 'http://') + BACKEND_HOST,
    'wsBase': (BACKEND_IS_SSL ? 'wss://' : 'ws://') + BACKEND_HOST
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'), {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
    }
  });
});

app.listen(8080, function () {
  console.log('app listening on http://localhost:8080!');
});
