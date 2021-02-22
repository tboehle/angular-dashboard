import { Component, OnInit } from '@angular/core';
import { AppConfigService } from './shared/services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  applicationState: 'ok' | 'enoperm' | 'authenticated' | 'startup' | 'error' = 'startup';

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

    setTimeout(() => {
      this.applicationState = 'ok';
    }, 100);
  }
}
