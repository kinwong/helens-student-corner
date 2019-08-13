import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRouters } from './app.routes';
import { WelcomeComponent } from './welcome/welcome.component';
import { PracticeComponent } from './practice/practice.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SlideShowPlayerComponent } from './slide-show-player/slide-show-player.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PracticeComponent,
        WelcomeComponent,
        SettingsComponent,
        NavbarComponent,
        SlideShowPlayerComponent,
        SanitizeHtmlPipe
          ],
      imports: [
        MaterialModule,
        FormsModule,
        NoopAnimationsModule,
        AppRouters
      ],
      providers: [
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
