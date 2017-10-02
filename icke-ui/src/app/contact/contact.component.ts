import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactRequest} from "../../../../icke-api/target/api/model/ts/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactRequest: ContactRequest;
  submitted = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.contactRequest = <ContactRequest>{};
  }

  onSubmit() {
    this.http.post("/api/contact", this.contactRequest);
  }

}
