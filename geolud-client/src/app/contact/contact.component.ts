import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { AlertService } from '../core/alert/alert.service';
import { ContactRequest } from '../api/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  private url = environment.appConfig.apiBase + '/api/contact';

  contactRequest: ContactRequest;
  @ViewChild('contactForm') contactForm: any;

  constructor(private http: HttpClient, private alertService: AlertService, title: Title) {
    title.setTitle('Georg Ludewig - Software Engineer - Contact');
  }

  ngOnInit() {
    this.contactRequest = <ContactRequest>{};
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // note we set the response type to text due to this issue:  https://github.com/angular/angular/issues/18680
      this.http.post(this.url, this.contactRequest, { responseType: 'text' }).subscribe(
        () => {
          this.alertService.addSuccess('Contact request was submitted!');
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
