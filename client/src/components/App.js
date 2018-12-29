import React, { Component } from "react";

// step2
// BrowserRouter is the Brain of the react router,
// 		 looks as the current URL and then change the set of components
//		 that are visible on the screen at any given time
// Route is the react component that is used to setup a rule between a certain route
//		that the user might visit indide an applicaiton and a set of component that will be
//		actually visible on the screen
import { BrowserRouter, Route } from "react-router-dom";

//(L79)
import { connect } from "react-redux";
import * as actions from "../actions";

//dummy components for demo
import Header from "./Header";
import Landing from "./Landing";
import DashBoard from "./DashBoard";
const SurveyNew = () => <h2> SurveyNew </h2>;

class App extends Component {
  // (L78) the instance that this component was mounted to the screen
  // go figure out whether or not the current user is actually signed in
  // Time different between didMount and willMount is small but willMount might be call multiple times
  componentDidMount() {
    this.props.fetchUser(); //L79
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={DashBoard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// L79
export default connect(
  null,
  actions
)(App);
