import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './shared/services/app-config.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarLinkComponent } from './sidebar/sidebar-link/sidebar-link.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS, metaReducers } from './reducers';

@NgModule({
  declarations: [AppComponent, SidebarComponent, SidebarLinkComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store App',

      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }),

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://ngrx.io/guide/effects#registering-root-effects
     */
    EffectsModule.forRoot([])
  ],
  providers: [AppConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
