import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ContactRequest } from './contact.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FetchResult } from 'apollo-link';

interface ContactResponse {
  submitContactRequest: { sentAt: string };
}

const submitContactRequest = gql`
  mutation submitContactRequest($name: String, $email: String!, $message: String!) {
    submitContactRequest(name: $name, email: $email, message: $message) {
      sentAt
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private apollo: Apollo) {}

  submitContactRequest(contactRequest: ContactRequest): Observable<Date> {
    return this.apollo
      .mutate({
        mutation: submitContactRequest,
        variables: { name: contactRequest.name, email: contactRequest.email, message: contactRequest.message },
      })
      .pipe(map((result: FetchResult<ContactResponse>) => new Date(result.data.submitContactRequest.sentAt)));
  }
}
