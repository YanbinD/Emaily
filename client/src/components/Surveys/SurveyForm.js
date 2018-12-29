import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
// import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

// reduxForm is similar to connect, which enable connection between the form and redux store

class SurveyForm extends Component {
//   renderFields() {
//     return (
//     //   <div>
//     //     <Field type="text" name="title" component={SurveyField} />
//     //   </div>
//     );
//   }
renderFields() {
    // map the fordFields array to Field Element 
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div style={{padding:"10px"}}>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// the argument in reduxForm() is to customize how our form behave
export default reduxForm({ form: "surveyForm" })(SurveyForm);
