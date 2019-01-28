import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

import { MaterialModule } from './material.module';
import { CookieService } from 'ngx-cookie-service';

import { AppRouters } from './app.routes';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SettingsComponent } from './settings/settings.component';


import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CoursePlayerComponent } from './course-player/course-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    WelcomeComponent,
    SettingsComponent,
    CoursePlayerComponent,
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

    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.DEBUG
    }),
    AppRouters
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
