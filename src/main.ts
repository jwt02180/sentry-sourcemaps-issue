import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as Sentry from '@sentry/capacitor';
import * as SentryAngular from '@sentry/angular';

Sentry.init({
  dsn: 'INSERT_DSN_HERE',
  release: `INSERT_RELEASE_HERE`,
  dist: 'INSERT_DIST_HERE'
}, SentryAngular.init);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
