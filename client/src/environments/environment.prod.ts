import { NgxLoggerLevel } from "ngx-logger";

export const environment = {
  production: true,
  logging: {
    level: NgxLoggerLevel.OFF,
    serverLoggingUrl: 'https://devdactic.free.beeceptor.com/logs',
    serverLogLevel: NgxLoggerLevel.ERROR
  }
};
