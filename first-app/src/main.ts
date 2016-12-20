
// main.ts is executed FIRST
import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

// this is your bootstrap/main line of code
// SEe app.module.ts
platformBrowserDynamic().bootstrapModule(AppModule);
