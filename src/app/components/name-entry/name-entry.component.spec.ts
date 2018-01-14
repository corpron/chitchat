import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameEntryComponent } from './name-entry.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ChatGuard } from '../../services/chat-guard/chat-guard.guard';

describe('NameEntryComponent', () => {
  let component: NameEntryComponent;
  let fixture: ComponentFixture<NameEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NameEntryComponent],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        ChatGuard
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
