import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {StateService} from './services/state.service'
import {NavigationComponent} from './navigation/navigation.component';

@Component({
	selector: 'fmb-app',
	template: require('./app.component.html'),
	styles: [require('./app.component.scss')],
	directives: [NavigationComponent, ROUTER_DIRECTIVES],
	providers: [StateService]
})

export class AppComponent {

}