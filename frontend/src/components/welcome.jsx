import React from "react";
import CodeBlock from "./CodeBlock";

const ReactMarkdown = require("react-markdown");

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sql: "",
      text: ""
    };
  }

  componentDidMount() {
    fetch("/data/sql.md")
      .then(r => r.text())
      .then(text => {
        // console.log(text);

        this.setState({
          sql: text
        });
      });
    fetch("/data/README.md")
      .then(r => r.text())
      .then(text => {
        this.setState({
          text: text
        })
      });
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome</h1>
            <p className="lead">This is a inventory management app.</p>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide row"
          data-ride="carousel"
        >
          <div className="carousel-inner bg-gradient-dark">
            <div className="carousel-item active">
              <img
                src={require("../resources/diagram.svg")}
                className="d-block w-100 mx-auto"
                alt="..."
              />
            </div>
            <div className="carousel-item row">
              <ReactMarkdown
                className="col-6 mx-auto text-justify border"
                source={this.state.sql}
                renderers={{ code: CodeBlock }}
              />
            </div>
            <div className="carousel-item">
              <ReactMarkdown
                className="col-6 mx-auto text-justify "
                source={this.state.text}
                renderers={{ code: CodeBlock }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default WelcomePage;
