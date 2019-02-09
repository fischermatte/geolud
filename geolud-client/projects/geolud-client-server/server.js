const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const BACKEND_HOST = process.env.BACKEND_HOST || 'localhost:8000';
const BACKEND_IS_SSL = process.env.BACKEND_IS_SSL || false;

const app = express();
app.use(express.static(getAppDirectory()));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// configuration REST endpoint
app.get('/app-config', function(req, res) {
  res.status(200).json({
    apiBase: (BACKEND_IS_SSL ? 'https://' : 'http://') + BACKEND_HOST,
    wsBase: (BACKEND_IS_SSL ? 'wss://' : 'ws://') + BACKEND_HOST,
  });
});

// static files to be served
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'), {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
    },
  });
});

app.listen(8080, function() {
  console.log('app listening on http://localhost:8080!');
});

function getAppDirectory() {
  let directory = path.join(__dirname, 'app');
  if (!fs.existsSync(directory)) {
    // fallback when starting server from within git repo as developer
    directory = path.join(__dirname, '..\\..\\dist\\app');
  }
  console.log(`serving files from ${directory}`);
  return directory;
}
