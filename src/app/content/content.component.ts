import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State, selectShowSidenav } from '../state';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.showSidenav$ = this.store.select(selectShowSidenav);
  }

  ngOnInit(): void {}
}
