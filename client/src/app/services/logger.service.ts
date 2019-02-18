import { Injectable } from '@angular/core';

export abstract class Logger {

  info: any;
  warn: any;
  error: any;
  debug: any;
}

export let isDebugMode = true;//environment.isDebugMode;
const noop = (): any => undefined;

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {

  constructor() { }

 
  get info() {
    if (isDebugMode) {
      return console.info.bind(console);
    } else {
      return noop;
    }
  }

  get warn() {
    if (isDebugMode) {
      return console.warn.bind(console);
    } else {
      return noop;
    }
  }

  get error() {
    if (isDebugMode) {
      return console.error.bind(console);
    } else {
      return noop;
    }
  }
  
  get debug() {
    if (isDebugMode) {
      return console.debug.bind(console);
    } else {
      return noop;
    }
  }

  invokeConsoleMethod(type: string, args?: any): void {
    const logFn: Function = (console)[type] || console.log || noop;
    logFn.apply(console, [args]);
  }
 
}
