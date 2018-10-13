
//L81 
import { FETCH_USER } from '../actions/types';

//1st argu: stateObject that is responsible for this resuder 
//2nd argu: action object 
export default function (state = null, action) {
	
	switch (action.type) {
		//L81 
		case FETCH_USER:
			return action.payload || false;
		default: 
			return state; //no change is nessary at this point, just return state objet 
	}
}

