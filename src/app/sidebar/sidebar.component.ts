import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from './sidebar-link/sidebar-link.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input()
  navItems: NavItem[] = [];

  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.select(fromRoot.selectShowSidenav);
  }

  ngOnInit(): void {}
}
