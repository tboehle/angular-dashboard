import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { version } from '../../../../package.json';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  constructor() {}

  /**
   * @returns {bool}
   */
  public isDebug(): boolean {
    return environment.env === 'dev';
  }

  /**
   * @returns {String}
   */
  public getEnv(): string {
    return environment.env;
  }

  /**
   * @returns {String}
   */
  public getName(): string {
    return environment.name;
  }

  /**
   * @returns {String}
   */
  public getBaseUrl(): string {
    return environment.api.replace('/api', '');
  }

  /**
   * @returns {String}
   */
  public getApi(): string {
    return environment.api;
  }

  /**
   * @returns {String}
   */
  public getWebSocketUrl(): string {
    return environment.webSocket;
  }

  /**
   * @returns {String}
   */
  public getDate(): string {
    return moment().format(environment.dateFormat);
  }

  /**
   * @returns {String}
   */
  public getVersion(): string {
    return version;
  }
}
