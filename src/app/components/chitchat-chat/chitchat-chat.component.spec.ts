import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitchatChatComponent } from './chitchat-chat.component';

describe('ChitchatChatComponent', () => {
  let component: ChitchatChatComponent;
  let fixture: ComponentFixture<ChitchatChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitchatChatComponent ]
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
