import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8004/auth',
        realm: 'angular-web',
        clientId: 'angular-dashboard',
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25,
      },
      loadUserProfileAtStartUp: true,
    });
}
