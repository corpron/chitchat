import { TestBed, async } from '@angular/core/testing';

import { ChitchatComponent } from './chitchat.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NameEntryOverlayService } from './services/name-entry-overlay/name-entry-overlay.service';
import { OverlayModule } from '@angular/cdk/overlay';


describe('ChitchatComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        OverlayModule
      ],
      declarations: [
        ChitchatComponent
      ],
      providers: [
        NameEntryOverlayService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ChitchatComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'chitchat'`, async(() => {
    const fixture = TestBed.createComponent(ChitchatComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('chitchat');
  }));

});
