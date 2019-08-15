import { TestBed } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { NGXLogger } from 'ngx-logger';
import { NGXLoggerMock } from '../mocks/ngx-logger.mock';
import { CookieService } from 'ngx-cookie-service';
import { CookieServiceMock } from '../mocks/cookie.service.mock';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [

    ],
    providers: [
      { provide: CookieService, useClass: CookieServiceMock },
      { provide: NGXLogger, useClass: NGXLoggerMock }
    ]
  }));

  it('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });

});
