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
          this.contactForm.reset();
        },
        error => {
          console.log("Error occured" + error);
        }
      );
    }
  }

}
