import axios from 'axios'
import { FETCH_USER } from './types';

//==== V1 of the code , call the dispath function after the promise from the get request return 
//fetchUser action creater 
// export const fetchUser = () => {
// 	return function (dispatch) {
// 		axios.get('/api/current_user')
// 		.then (res => dispatch({ type:FETCH_USER, payload: res})) //use axios to make a get request to back end 		
// 	};
// };


//==== V2.1 
// export const fetchUser = () =>  dispatch => {
// 		axios.get('/api/current_user')
// 		.then (res => dispatch({ type:FETCH_USER, payload: res})) //use axios to make a get request to back end 		
// };

export const fetchUser = () => async dispatch => {
	const res =	await axios.get('/api/current_user')
	dispatch({ type:FETCH_USER, payload: res}); //use axios to make a get request to back end 		
};