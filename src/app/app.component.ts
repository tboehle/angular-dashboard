import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './shared/services/app-config.service';
import { NavItem } from './sidebar/sidebar-link/sidebar-link.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  applicationState: 'ok' | 'enoperm' | 'authenticated' | 'startup' | 'error' = 'startup';
  navigation: NavItem[] = [];

  constructor(private config: AppConfigService) {}

  ngOnInit(): void {
    console.info(
      '%c' +
        [
          '=================================',
          (this.config.isDebug() ? 'DEVELOPMENT' : 'PRODUCTION') + '\n',
          'Name: ' + this.config.getName(),
          'Version: ' + this.config.getVersion(),
          'Date: ' + this.config.getDate(),
          'API: ' + this.config.getApi(),
          '=================================',
        ].join('\n'),
      'color:#2c5aa0;font-weight:bold',
    );

    this.setupNavigation();

    setTimeout(() => {
      this.applicationState = 'ok';
    }, 100);
  }

  private setupNavigation() {
    const nav: NavItem[] = [
      {
        label: 'Dashboard',
        route: 'home',
        icon: 'assets/images/apps.svg',
      },
      {
        label: 'Maintenance',
        route: 'maintenance',
        icon: 'assets/images/build.svg',
      },
      {
        label: 'Training',
        route: 'training',
        icon: 'assets/images/touch_app.svg',
      },
    ];
    this.navigation = nav;
  }
}
