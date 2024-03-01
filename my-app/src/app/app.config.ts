import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const URL_SERVER = new InjectionToken<String>('servidor');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    { provide: URL_SERVER, useValue: 'http://localhost:8080/' },
  ]
};