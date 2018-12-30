import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Emaily!</h1>
        <p> Collect feedback form your users  </p>
      </div>

        <Link to="/surveys" className="btn blue lighten-2"> Go to DashBoard </Link> 
    </div>
  );
};

export default Landing;
