import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { AlertService } from '../core/alert/alert.service';
import { ContactRequest } from './contact.model';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  private url = environment.appConfig.apiBase + '/api/contact';

  contactRequest: ContactRequest;
  @ViewChild('contactForm', { static: true }) contactForm: any;

  constructor(private contactService: ContactService, private alertService: AlertService, title: Title) {
    title.setTitle('Georg Ludewig - Software Engineer - Contact');
  }

  ngOnInit() {
    this.contactRequest = <ContactRequest>{};
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.submitContactRequest(this.contactRequest).subscribe(
        (sentAt: Date) => {
          this.alertService.addSuccess('Contact request was submitted at ' + sentAt.toLocaleString());
          this.contactForm.reset();
        },
        error => {
          this.alertService.addError('Failed to submit contact request due to some very mysterious reasons !', error);
        },
        () => {
          window.scrollTo(0, 0);
        },
      );
    }
  }
}
