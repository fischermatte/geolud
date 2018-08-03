const express = require('express');
const path = require('path');
const app = express();
const BACKEND_HOST = process.env.BACKEND_HOST || 'localhost:8000';
const BACKEND_IS_SSL = process.env.BACKEND_IS_SSL || false;
const VAPID_PUPLIC_KEY = process.env.VAPID_PUPLIC_KEY || 'BNIQ6kTA0xRv7p4Hi9jfatnhB40Meo0M_KFfv54rp_GA7ip1uy2KiAT0bfz0CSwY5JjJj6lzcv306wVTf9A3NDU';

app.use(express.static(__dirname + '/app'));

app.get('/app-config', function (req, res) {
  res.status(200).json({
    'apiBase': (BACKEND_IS_SSL ? 'https://' : 'http://') + BACKEND_HOST,
    'wsBase': (BACKEND_IS_SSL ? 'wss://' : 'ws://') + BACKEND_HOST,
    'vapidPulicKey': VAPID_PUPLIC_KEY
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
