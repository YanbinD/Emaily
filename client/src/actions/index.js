import axios from 'axios'
import { FECTH_USER } from './types';

const fetchUser = () => {
	return function () {
		axios.get('/api/current_user')
		.then (res => dispatch({ type:FECTH_USER, payload: res})) //use axios to make a get request to back end 		
	}
}

//==== V! of the code , call the dispath function after the promise from the get request return 