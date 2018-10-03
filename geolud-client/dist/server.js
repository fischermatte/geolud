const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv()

const BACKEND_HOST = process.env.BACKEND_HOST || 'localhost:8000';
const BACKEND_IS_SSL = process.env.BACKEND_IS_SSL || false;
const MAIL_CREDENTIALS = appEnv.getServiceCreds('geolud-mailservice');

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

app.post('/contact', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  sendEmail(name, email, message);
  res.status(200).json({
    success: true
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

function sendEmail(from, email, message) {
  let transporter = nodemailer.createTransport({
    host: MAIL_CREDENTIALS.host,
    port: MAIL_CREDENTIALS.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: MAIL_CREDENTIALS.username,
      pass: MAIL_CREDENTIALS.password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: from + '<' + email + '>', // sender address
    to: MAIL_CREDENTIALS.to, // list of receivers
    subject: 'GEOLUD-SITE: Contact Request', // Subject line
    text: message, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
}
