import { provideRouter, RouterConfig } from '@angular/router';

import {State} from './interfaces/interfaces'

import {LoginComponent} from './login/login.component'
import {UserComponent} from './user/user.component'
import {VideoComponent} from './video/video.component'
import {LogoutComponent} from './logout/logout.component'

export const states: State[] = [{
	path: 'login',
	component: LoginComponent,
	visible: true,
	iconClass: 'sign-in'
}, {
	path: 'user',
	component: UserComponent,
	visible: true,
	iconClass: 'user'
}, {
	path: 'video',
	component: VideoComponent,
	visible: true,
	iconClass: 'play-circle-o'
}, {
	path: 'logout',
	component: LogoutComponent,
	visible: true,
	iconClass: 'sign-out'
}];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(states)
];