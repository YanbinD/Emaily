import React from 'react'
import ReactDOM from 'react-dom'

//L64 create the provider tag 
// ----------- STEP 1 -------------
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'

// ----------- STEP 2 -------------
import App from './components/App'

//== the first argument for createStore is all the different prodducers that we have inside our application 
// dummy reducer () => []
//== the second argument is the initial state of our application, use for server-side rendering, here just empty object 
//== the third argument is the applymiddleware call (reduxthung will be added later )
const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
     document.querySelector('#root')
);

// The provider tag is an react component that knows how to read changes from our redux store, any time the redux store get some new states produce inside of it, the provider tag will inform all its CHILDREN component, and will update all those components with those new states 