import { AppConfig } from '../app/shared/models/config';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: AppConfig = {
  production: false,
  env: 'dev',
  basename: '/',
  name: 'Angular Dashboard',
  api: 'http://localhost:8080/v1',
  webSocket: 'ws://localhost:8080/v1/ws',
  dateFormat: 'YYYY-MM-DD',

  // OIDC
  openIdUri: 'http://localhost:3030/realms/swf/protocol/openid-connect/auth',
  openIdScope: 'openid roles',
  openIdClientId: 'dashboard',
  openIdRedirectUri: 'http://localhost:3000/auth/callback',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
