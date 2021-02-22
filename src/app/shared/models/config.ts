export interface AppConfig {
  production: boolean;
  env: string;
  basename: string;
  name: string;
  api: string;
  webSocket: string;
  dateFormat: string;

  // OIDC
  openIdUri: string;
  openIdClientId: string;
  openIdScope: string;
  openIdRedirectUri: string;
}
