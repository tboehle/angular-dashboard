import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './shared/services/app-config.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarLinkComponent } from './sidebar/sidebar-link/sidebar-link.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, SidebarLinkComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
