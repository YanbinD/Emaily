import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

// shows surveyForm and surveyForm review
class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onBackToSurveyForm={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
// by default, destoryOnUnmount is true, therefore when <SurveyNew /> unmount, 
// the form value will be destory 
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
