import { Component, OnInit, OnDestroy } from '@angular/core';
import { speakers, Speaker } from 'src/api';
import { SettingsService, Settings } from '../services/settings.service';

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
    this._settings.saveSettings();
  }
}
