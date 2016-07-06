import {Component, OnInit} from '@angular/core';

import {StateService} from '../services/state.service'

@Component({
	selector: 'fbm-logout',
	template: require('./logout.component.html')
})

export class LogoutComponent implements OnInit {

	constructor(private stateService: StateService) { }

	ngOnInit() {

	}
}