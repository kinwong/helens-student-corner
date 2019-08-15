import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { Settings } from 'src/api/settings';
import { Speaker, speakers } from 'src/api/speaker';

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
    this.model = _settings.loadSettings();
  }
  ngOnInit() {
  }
  ngOnDestroy(): void {
    this._settings.saveSettings(this.model);
  }
}
