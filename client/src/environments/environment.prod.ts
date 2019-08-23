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
        key: 'AIzaSyCj2Tbuud7sNPzUUwV0IID4PFBk6byu9vk'
      }
    }
  }
};
