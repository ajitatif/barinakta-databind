import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslationProviders } from './i18n-providers';

import { AppModule } from './app.module';

getTranslationProviders().then((providers: any) => {
    const options = { providers };
    platformBrowserDynamic().bootstrapModule(AppModule, options);
});
