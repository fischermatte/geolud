import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  addError(text, error?: any) {
    setTimeout(() =>this.toastr.error(text));
    console.error(JSON.stringify(error));
  }

  addSuccess(text: string, title?: string) {
    setTimeout(() =>this.toastr.success(text, title));
  }
}
