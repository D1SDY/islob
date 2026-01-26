import { provideHttpClient } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig, isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {
  MatIconRegistry
}                            from '@angular/material/icon';
import {
  DomSanitizer
}                            from '@angular/platform-browser';
import {
  provideRouter
}                            from '@angular/router';
import {
  provideStore
}                            from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes }            from './app.routes';
import { configToolReducer } from './config-tool/data-access/config-tool.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: registerIcons,
      deps: [MatIconRegistry, DomSanitizer],
      multi: true,
    },
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      // connectInZone: true, // optional (see note below)
    }),
  ],
};


function registerIcons(iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
  return () => {
    const icons: Array<[string, string]> = [
      ['plus','assets/icons/plus.svg'],
      ['delete','assets/icons/delete.svg'],
      ['stack','assets/icons/stack.svg'],
      ['cross','assets/icons/cross.svg'],
      ['link','assets/icons/link.svg'],
      ['error','assets/icons/error.svg'],
    ];
    icons.forEach(([name, url]) => {
      iconReg.addSvgIcon(name, sanitizer.bypassSecurityTrustResourceUrl(url));
    })
  };
}
