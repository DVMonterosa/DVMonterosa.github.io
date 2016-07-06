import {Injectable} from '@angular/core';

import {State} from '../interfaces/interfaces'
//
//let States:State[] = [
//  {
//    key: 'login',
//    id: 1,
//    visible: false,
//    iconClass: 'sign-in'
//  }, {
//    key: 'user',
//    id: 2,
//    visible: false,
//    iconClass: ''
//  }, {
//    key: 'video',
//    id: 3,
//    visible: false,
//    iconClass: ''
//  }, {
//    key: 'reactions',
//    id: 4,
//    visible: false,
//    iconClass: ''
//  }, {
//    key: 'logout',
//    id: 5,
//    visible: true,
//    iconClass: 'sign-out'
//  }
//];

//let appState = {
//	actual: 1,
//	prev: 2
//};

//let activeState:State;

@Injectable()

export class StateService {
	//activeState: State;

  constructor() {

  }

	setState(id:number) {
		//let state:State[] = States.filter(state => state.id === id);
		//
		//if (state.length) {
		//	activeState = state[0];
		//}

		//console.log(activeState)
	}

	getState() {
		//return activeState;
	}

  getStates() {
    //return States;
  }
}