import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {
  }

  addError(text, error?: any) {
    // this.toastr.error(text);
    console.error(JSON.stringify(error));
  }

  addSuccess(text: string, title?: string) {
    // this.toastr.success(text, title);
  }
}
