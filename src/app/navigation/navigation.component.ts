import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import {states} from '../app.routes'
import {State} from '../interfaces/interfaces'

@Component({
	selector: 'fbm-nav',
	template: require('./navigation.component.html'),
	styles: [require('./navigation.component.scss')],
	directives: [ROUTER_DIRECTIVES]
})

export class NavigationComponent implements OnInit {
	states: State[];

	constructor (private router: Router) {
	}

	ngOnInit () {
		this.states = states;
	}

	chooseState (state: State) {
		this.router.navigate([`/${state.path}`]);
	}

	processClass (state: State) {
		return `fa fa-${state.iconClass}`;
	}
}