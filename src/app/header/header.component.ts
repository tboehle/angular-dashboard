import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppConfigService } from '../shared/services/app-config.service';

import { State, selectShowSidenav } from '../state';
import { LayoutActions } from '../state/layout'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSidenav$: Observable<boolean>;

  anchorEl: any = null;

  constructor(private store: Store<State>, public config: AppConfigService) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(selectShowSidenav);
  }

  ngOnInit(): void {
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  openSidenav() {
    this.store.dispatch(LayoutActions.openSidenav());
  }

  public showMenuHandler($event: any): void {
      this.anchorEl = $event.currentTarget;
  }

  public closeMenuHandler(): void {
      this.anchorEl = null;
  }

  public logoutHandler(): void {
      this.closeMenuHandler()

      // Action Logout
  }

}
