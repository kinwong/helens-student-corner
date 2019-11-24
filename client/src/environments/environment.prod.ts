import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,

  logging: {
    level: NgxLoggerLevel.OFF,
    serverLoggingUrl: 'https://devdactic.free.beeceptor.com/logs',
    serverLogLevel: NgxLoggerLevel.ERROR
  },
  apis: {
    google: {
      textToSspeech: {
        baseUrl: 'https://texttospeech.googleapis.com',
        version: 'v1',
        key: 'AIzaSyAfKI5z2HMnT9HO7NStcfw59wG6N_42SiQ'
      }
    }
  }
};
