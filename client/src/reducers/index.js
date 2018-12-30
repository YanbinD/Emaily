import { combineReducers } from 'redux'; 
import authReducer from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import  surveysReducer  from './surveysReducer';

export default combineReducers({
	//the auth state is being manufacture by the authReducer
	auth: authReducer, //assign the authReducer to the auth property, so our state object will have one property call auth 
	form : reduxForm,
	surveys : surveysReducer
});