import React from "react";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome</h1>
          <p className="lead">
            This is a inventory management app.
          </p>
        </div>
      </div>
    );
  }
}

export default WelcomePage