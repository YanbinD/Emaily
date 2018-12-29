import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  // token is the object that represent the entire charge 
  render() {
    return (
      <StripeCheckout
        name="Note Keeper"
        description="$5 for 5 credit "
        amount={500}
        token={token => this.props.handleStripeToken(token)} 
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        {/*amount is in cents*/}

        <button className="btn"> Add Credits </button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payments);
