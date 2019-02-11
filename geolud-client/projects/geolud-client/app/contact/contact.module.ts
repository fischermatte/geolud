import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from './contact.component';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, CardsFreeModule, InputsModule, WavesModule} from 'angular-bootstrap-md';

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, FormsModule, ContactRoutingModule, InputsModule, CardsFreeModule, ButtonsModule, WavesModule],
  providers: [],
})
export class ContactModule {}
