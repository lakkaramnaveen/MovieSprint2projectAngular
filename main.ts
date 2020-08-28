import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//from angular.json it will know were to go
//execution starts from here it will go to AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
