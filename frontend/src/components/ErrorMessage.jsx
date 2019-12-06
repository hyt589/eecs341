import React from "react"
import { createPortal } from "react-dom"

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ display: false })
  }

  render() {
    console.log(this.state.display)
    return !this.state.display ? null : (
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        <strong>Error:</strong> an error happened. <br/>
        {this.props.msg}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={this.handleClick}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
}

export default ErrorMessage
