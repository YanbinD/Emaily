import axios from 'axios'
import { FETCH_USER } from './types';

export const fetchUser = () => {
	return function (dispatch) {
		axios.get('/api/current_user')
		.then (res => dispatch({ type:FETCH_USER, payload: res})) //use axios to make a get request to back end 		
	};
};

//==== V! of the code , call the dispath function after the promise from the get request return 