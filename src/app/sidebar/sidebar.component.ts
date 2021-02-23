import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from './sidebar-link/sidebar-link.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input()
  navItems: NavItem[] = [];
  public collapsed = false;

  constructor() {}

  ngOnInit(): void {}
}
