import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CookieService } from 'ngx-cookie-service';
import { LoggerModule } from 'ngx-logger';

import { MaterialModule } from './material.module';
import { AppRouters } from './app.routes';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { SlideShowPlayerComponent } from './slide-show-player/slide-show-player.component';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { SanitizeHtmlPipe } from './pipes/sanitize-html';
import { reducers, metaReducers } from './reducers';
import { environment } from 'src/environments/environment';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PracticeComponent,
    SanitizeHtmlPipe,
    SlideShowPlayerComponent,
    WelcomeComponent,
    PreferencesComponent,
  ],
  imports: [
    AppRouters,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,

    LoggerModule.forRoot(environment.logging),
    StoreModule.forRoot(
      reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
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
