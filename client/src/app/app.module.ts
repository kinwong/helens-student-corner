import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MaterialModule } from './material.module';
import { CookieService } from 'ngx-cookie-service';
import { LoggerModule } from 'ngx-logger';

import { AppRouters } from './app.routes';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';

import { HttpErrorInterceptor } from './http-error.interceptor';

import { NavbarComponent } from './nav/navbar/navbar.component';
import { SlideShowPlayerComponent } from './slide-show-player/slide-show-player.component';
import { environment } from 'src/environments/environment';

import { SanitizeHtmlPipe } from './pipes/sanitize-html';

@NgModule({
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
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MaterialModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatProgressBarModule,
    MatCheckboxModule,
    LoggerModule.forRoot(environment.logging),
    AppRouters,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
