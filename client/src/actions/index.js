import axios from "axios";
import { FETCH_USER } from "./types";

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

// === async await syntax ===
// export const fetchUser = () => async dispatch => {
// 	const res =	await axios.get('/api/current_user')
// 	dispatch({ type:FETCH_USER, payload: res}); //use axios to make a get request to back end
// };

//=  L81 change the payload to just res.data because we do not care about anything else
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data }); //use axios to make a get request to back end
};

export const handleStripeToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
