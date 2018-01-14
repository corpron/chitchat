import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitchatChatComponent } from './chitchat-chat.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageBotService } from '../../services/message-bot/message-bot.service';
import { HttpClientModule } from '@angular/common/http';

describe('ChitchatChatComponent', () => {
  let component: ChitchatChatComponent;
  let fixture: ComponentFixture<ChitchatChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChitchatChatComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ],
      providers: [
        MessageBotService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitchatChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
