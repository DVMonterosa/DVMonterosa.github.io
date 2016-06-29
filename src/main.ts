import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';

if (process.env.ENV === 'production') {
    enableProdMode();
}

import './styles/main.scss';

bootstrap(AppComponent, []);