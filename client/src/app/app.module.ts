import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LoggerModule } from 'ngx-logger';

import { MaterialModule } from './material.module';
import { AppRouters } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { PlayerComponent } from './player/player.component';
import { PracticeComponent } from './practice/practice.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ProgressComponent } from './progress/progress.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { HttpErrorInterceptor } from './http-error.interceptor';
import { SanitizeHtmlPipe } from './pipes/sanitize-html';
import { reducers, State } from './reducers';

import { environment } from 'src/environments/environment';
import { AppEffects } from './app.effects';
import { PlayerEffects } from './effects/player.effects';
import { PracticeContentEffects } from './effects/practice-content.effects';
import { Course, Exercise } from './models/models';
import { entityConfig } from './models/entity-metadata';

// function logger(reducer: ActionReducer<State>): ActionReducer<State> {
//   return (state, action) => {
//     const result = reducer(state, action);
//     console.groupCollapsed(action.type);
//     console.log('prev', state);
//     console.log('action', action);
//     console.log('next', result);
//     console.groupEnd();
//     return result;
//   };
// }
const metaReducers: MetaReducer<State>[] =
  !environment.production ? [] : [];

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
      maxAge: 30, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig),
    EffectsModule.forFeature([PracticeContentEffects, PlayerEffects])
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
