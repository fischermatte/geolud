import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {


  constructor() {
  }

  addError(text, error?: any) {
    console.error(JSON.stringify(error));
  }

  addSuccess(text: string, title?: string) {
    console.info(JSON.stringify(text));
  }
}
