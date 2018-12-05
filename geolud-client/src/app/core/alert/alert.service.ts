import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  addError(text, error?: any) {
    this.toastr.error(text);
    console.error(JSON.stringify(error));
  }

  addSuccess(text: string, title?: string) {
    this.toastr.success(text, title);
  }
}
