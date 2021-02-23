import { Component, Input, OnInit } from '@angular/core';

export interface NavItem {
  label: string;
  route: string;
  icon: string;
}
@Component({
  selector: 'app-sidebar-link',
  templateUrl: './sidebar-link.component.html',
  styleUrls: ['./sidebar-link.component.scss'],
})
export class SidebarLinkComponent implements OnInit {
  @Input()
  collapsed: boolean = true;
  @Input()
  navItem: NavItem = null as any;

  constructor() {}

  ngOnInit(): void {}
}
