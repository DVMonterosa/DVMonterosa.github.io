import {Component, OnInit} from '@angular/core';

import {StateService} from '../services/state.service'

@Component({
	selector: 'fbm-login',
	template: require('./login.component.html')
})

export class LoginComponent implements OnInit {

	constructor(private stateService: StateService) { }

	ngOnInit() {

	}
}