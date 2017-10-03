import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactRequest} from "../../../../icke-api/target/api/model/ts/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactRequest: ContactRequest;
  feedback: Alert;
  @ViewChild('contactForm') contactForm: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.contactRequest = <ContactRequest>{};
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // note we set the response type to text due to this issue:  https://github.com/angular/angular/issues/18680
      this.http.post("/api/contact", this.contactRequest, {responseType: 'text'}).subscribe(
        response => {
          this.feedback = <Alert>{
            type: "success",
            message: "Contact request was submitted!"
          };
          this.contactForm.reset();
        },
        error => {
          this.feedback = <Alert>{
            type: "danger",
            message: "Failed to submit contact request due to some very mysterious reasons !"
          };
        }
      );
    }
  }

  public closeAlert() {
    this.feedback = null;
  }


}

class Alert {
  type: string;
  message: string;
}

