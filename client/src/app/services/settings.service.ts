import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { speakers, Speaker } from 'src/api';
import { Course, courses } from '../../api/course-definition';
import { NGXLogger } from 'ngx-logger';

export enum Cookies {
  Settings = 'settings',
  CourseName = 'courseName'
}

export interface Settings {
  speaker: Speaker;
  showSubtitle: boolean;
  speed: number;
  metronome: boolean;
}
export interface CourseSettings {
  courseName: string;
}
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  static defaultSettings: Settings = {
    speaker: speakers[0],
    showSubtitle: false,
    speed: 1,
    metronome: false
  };
  settings: Settings;
  course: Course;

  constructor(
    private _cookies: CookieService,
    private _logger: NGXLogger) {
    this.loadSettings();
  }
  public loadSettings(): void {
    this.settings = this.loadSetting(Cookies.Settings, SettingsService.defaultSettings);
    this.course = this.loadCourse();
  }
  saveSettings(): void {
    this.saveSetting(Cookies.Settings, this.settings);
    this.saveSetting(Cookies.CourseName, <CourseSettings>{
      courseName: this.course.name});
  }
  private loadCourse(): Course {
    let finalCourse = courses[0];
    const courseSettings = this.loadSetting(
      Cookies.CourseName, <CourseSettings>{courseName: courses[0].name});
      const courseFound = courses.find(course => course.name === courseSettings.courseName);
      if (courseFound) { finalCourse = courseFound; }
    return finalCourse;
  }
  private loadSetting<T>(name: string, defaultValue: T): T {
    let value = defaultValue;
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
    return value;
  }
  private saveSetting(name: string, value: any): void {
    this._cookies.set(name, JSON.stringify(value));
  }
}
