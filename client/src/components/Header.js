import React, { Component } from "react";
//connect the component to redux store L82
import { connect } from "react-redux";
import { Link } from "react-router-dom"; //L87
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        // return <a href="/auth/google"> Login with Google &nbsp; </a>
        return (
          <li>
            <a
              href="/auth/google"
              className="waves-effect waves-light btn blue lighten-5"
            >
              <span className="indigo-text text-darken-4">
                Login with Google
              </span>
            </a>
          </li>
        );

      default:
        return [
          <li key="1"> <Payments /> </li>,
          <li key="3" style={{ margin: "0 10px" }}> Credits: {this.props.auth.credits} </li>,
          <li key="2">
            <a href="/api/logout"
               className="waves-effect waves-light btn blue lighten-5 blue-grey-text text-darken-4">
              Log Out
            </a>
          </li>
        ];
    }
  }
  render() {
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper  pink lighten-3">
          <Link to={this.props.auth ? "/surveys" : "/ "} className="brand-logo">
            {" "}
            Logo
          </Link>
          <ul className="right">
            {this.renderContent()}
            {/*changed in L83*/}
          </ul>
        </div>
      </nav>
    );
  }
}

//L81 Step3
function mapStateToProps(state) {
  return { auth: state.auth };
}

//L81 step 2
export default connect(mapStateToProps)(Header);
