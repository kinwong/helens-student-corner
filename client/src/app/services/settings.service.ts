import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { speakers, Speaker } from 'src/api';
import { NGXLogger } from 'ngx-logger';
import { Course } from 'src/api/models';
import { loadCourses } from 'src/api/course-definition';

export interface Settings {
  speaker: Speaker;
  showSubtitle: boolean;
  speed: number;
  metronome: boolean;

  courses: Course[];
  selectedCourseName: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private static readonly CookiesSettings = 'settings';

  constructor(
    private _cookies: CookieService,
    private _logger: NGXLogger) {
  }
  loadSettings(): Settings {
    return this.loadSetting(
      SettingsService.CookiesSettings, () => {
        const courses = loadCourses();
        return <Settings> {
          speaker: speakers[0],
          showSubtitle: true,
          speed: 1.0,
          metronome: true,

          courses: courses,
          selectedCourseName: courses[0].name
        }
    });
  }
  saveSettings(settings: Settings): void {
    this.saveSetting(
      SettingsService.CookiesSettings, settings);
  }
  
  private loadSetting<T>(name: string, defaultFactory: () => T): T {
    let value = undefined;
    try {
      if (this._cookies.check(name)) {
        const textSetting = this._cookies.get(name);
        if (!textSetting) {
          const settingsLoaded = JSON.parse(textSetting);
          if (!settingsLoaded) {
            value = settingsLoaded;
          }
        }
      }
    } catch (error) {
      this._logger.error(error);
    }
    if (!value) {
      value = defaultFactory();
    }
    return value;
  }
  private saveSetting(name: string, value: any): void {
    this._cookies.set(name, JSON.stringify(value));
  }
}
