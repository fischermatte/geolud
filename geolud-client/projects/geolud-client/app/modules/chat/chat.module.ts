import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PushService } from './push/push.service';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}

@NgModule({
  declarations: [ChatComponent],
  imports: [FormsModule, CommonModule, ChatRoutingModule],
  providers: [PushService],
})
export class ChatModule {}
