const express = require('express');
const path = require('path');
const vcapServices = require('vcap_services');
const fs = require('fs');
const pushCredentials = vcapServices.getCredentials('geolud-push');

const BACKEND_HOST = process.env.BACKEND_HOST || 'localhost:8000';
const BACKEND_IS_SSL = process.env.BACKEND_IS_SSL || false;
const VAPID_PUPLIC_KEY =
  (pushCredentials && pushCredentials.vapid_puplic_key) || 'BNIQ6kTA0xRv7p4Hi9jfatnhB40Meo0M_KFfv54rp_GA7ip1uy2KiAT0bfz0CSwY5JjJj6lzcv306wVTf9A3NDU';
const APP_DIRECTORY = getAppDirectory();
const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(APP_DIRECTORY));

// configuration REST endpoint
app.get('/app-config', function(req, res) {
  res.status(200).json({
    apiBase: (BACKEND_IS_SSL ? 'https://' : 'http://') + BACKEND_HOST,
    wsBase: (BACKEND_IS_SSL ? 'wss://' : 'ws://') + BACKEND_HOST,
    vapidPublicKey: VAPID_PUPLIC_KEY,
  });
});

// static files to be served
app.get('*', function(req, res) {
  res.sendFile(path.join(APP_DIRECTORY, 'index.html'), {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
    },
  });
});

app.listen(port, function() {
  console.log('app listening on http://localhost:8080!');
});

function getAppDirectory() {
  let directory = path.join(__dirname, 'app');
  if (!fs.existsSync(directory)) {
    // fallback when starting server from within git repo as developer
    directory = path.join(__dirname, '../../dist/app');
  }
  console.log(`serving files from ${directory}`);
  return directory;
}
