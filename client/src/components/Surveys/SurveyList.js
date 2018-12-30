import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (this.props.surveys.length === 0) {
      return (
        <div className="card-panel blue darken-1" style={{padding : "5px", width:"80%", margin: "15px 10%",  textAlign: "center"}}>
          <span className="white-text" style={{padding : "5px"}} >There are no survey</span>
        </div>
      );
    } else {
      return this.props.surveys.reverse().map(survey => {
        return (
          <div className="card darken-1" key={survey._id}>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <p>{survey.body}</p>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a> Yes: {survey.yes}</a>
              <a> No: {survey.no}</a>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
