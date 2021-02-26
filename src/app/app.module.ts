import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './shared/services/app-config.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarLinkComponent } from './sidebar/sidebar-link/sidebar-link.component';

import { AppStateModule } from './state/state.module';
import { HeaderComponent } from './header/header.component';

import { MatButtonModule  } from '@angular/material/button';
import { MatIconModule  } from '@angular/material/icon';
import { MatMenuModule  } from '@angular/material/menu';
import { WebsocketComponent } from './header/websocket/websocket.component';


@NgModule({
  declarations: [AppComponent, SidebarComponent, SidebarLinkComponent, HeaderComponent, WebsocketComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStateModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
