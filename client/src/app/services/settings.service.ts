import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { CookieService } from 'ngx-cookie-service';
import { speakers, Cookies, Speaker } from 'src/api';

export interface Settings {
  speaker: Speaker;
  showSubtitle: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  static defaultSettings: Settings = {
    speaker: speakers[0],
    showSubtitle: false
  };
  settings: Settings;
  courseName: string;

  constructor(
    private _cookies: CookieService,
    private _logger: NGXLogger) {
    this.loadSettings();
  }
  public loadSettings(): void {
    let settings = SettingsService.defaultSettings;
    if (this._cookies.check(Cookies.Settings)) {
      const textSetting = this._cookies.get(Cookies.Settings);
      if (!textSetting) {
        try {
          const settingsLoaded = JSON.parse(textSetting);
          if (!settingsLoaded) {
            settings = settingsLoaded;
          }
        } catch (error) {
          this._logger.error(error);
        }
      }
      this.settings = settings;
    }
  }
  saveSettings(settings: Settings): void {
    this._cookies.set(Cookies.Settings, JSON.stringify(settings));
    this.settings = settings;
  }
}
