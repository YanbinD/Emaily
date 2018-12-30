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
        return (
          <li>
            <a href="/auth/google" className="waves-effect waves-light btn blue lighten-5" >
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
            <a href="/api/logout">
              Log Out
            </a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper  pink lighten-3" >
          <Link to={this.props.auth ? "/surveys" : "/ "} className="brand-logo" style={{margin : "0 20px"}}> Emaily </Link>
          <ul className="right">
            {this.renderContent()}
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
