import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { MetaService } from './services/meta.service'; // Create a MetaService

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    MetaService, // Register the MetaService
  ],
};
