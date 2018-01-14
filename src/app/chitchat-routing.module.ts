import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitchatChatComponent } from './components/chitchat-chat/chitchat-chat.component';
import { ChatGuard } from './services/chat-guard/chat-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    component: ChitchatChatComponent,
    canActivate: [ChatGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ChitchatRoutingModule {
}
