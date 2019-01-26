import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Settings, speakers, Speaker, Cookies } from 'src/api';
import { NGXLogger } from 'ngx-logger';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  model: Settings;
  readonly speakers: Speaker[] = speakers;

  constructor(
    private _settings: SettingsService) {
    this.model = _settings.settings;
  }
  ngOnInit() {
  }
  ngOnDestroy(): void {
    this._settings.saveSettings(this.model);
  }
}
