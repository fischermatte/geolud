import { Inject, Injectable } from '@nestjs/common';
import { MailConfig } from '../core/configuration.service';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  constructor(@Inject private mailConfig: MailConfig) {}

  public sendEmail(from: string, email: string, message: string) {
    const transporter = nodemailer.createTransport({
      host: this.mailConfig.host,
      port: this.mailConfig.port,
      secure: false, // true for 465, false for other ports
      auth: {
        user: this.mailConfig.username,
        pass: this.mailConfig.password,
      },
    });

    // setup email data with unicode symbols
    const mailOptions = {
      from: from + '<' + email + '>', // sender address
      to: this.mailConfig.to, // list of receivers
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
}
