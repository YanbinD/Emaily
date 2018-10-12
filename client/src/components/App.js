import React from 'react'

// step2 
// BrowserRouter is the Brain of the react router, 
// 		 looks as the current URL and then change the set of components 
//		 that are visible on the screen at any given time 
// Route is the react component that is used to setup a rule between a certain route 
//		that the user might visit indide an applicaiton and a set of component that will be 
//		actually visible on the screen
import {BrowserRouter} from 'react-router-dom'; 

//dummy components for demo
const Header = () => <h2> Header </h2>
const DashBoard = () => <h2> DashBoard </h2>
const SurveyNew = () => <h2> SurveyNew </h2>
const Landing = () => <h2> Landing </h2>


const App = () => {
	return (
		<div> 
			Hi there
		</div>
	);
}; 

export default App;