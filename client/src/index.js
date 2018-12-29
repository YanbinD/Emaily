import React from "react";
import ReactDOM from "react-dom";
import "materialize-css/dist/css/materialize.min.css"; //materialze CSS

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from "./reducers";
import reduxthunk from "redux-thunk";

import axios from 'axios';
window.axios = axios;

//== the first argument for createStore is all the different prodducers that we have inside our application
// dummy reducer () => []
//== the second argument is the initial state of our application, use for server-side rendering, here just empty object
//== the third argument is the applymiddleware call (reduxthung will be added later )
const store = createStore(reducers, {}, applyMiddleware(reduxthunk));

ReactDOM.render(
  //encapsulate <App /> component with provide tag
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// The provider tag is an react component that knows how to read changes from our redux store, any time the redux store get some new states produce inside of it, the provider tag will inform all its CHILDREN component, and will update all those components with those new states
