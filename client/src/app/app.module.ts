import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LoggerModule } from 'ngx-logger';

import { MaterialModule } from './material.module';
import { AppRouters } from './app.routes';

import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { PreferencesComponent } from './preferences/preferences.component';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { SanitizeHtmlPipe } from './pipes/sanitize-html';
import { reducers, metaReducers } from './reducers';

import { entityConfig } from './entity-metadata';
import { environment } from 'src/environments/environment';
import { PlayerComponent } from './player/player.component';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PracticeComponent,
    SanitizeHtmlPipe,
    WelcomeComponent,
    PreferencesComponent,
    PlayerComponent,
    ProgressComponent,
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
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
