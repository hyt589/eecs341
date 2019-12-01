import React from "react"

class QueryForm extends React.Component {
  render() {
    return (
      <form
        className="border container"
        endpoint={this.props.endpoint}
        urlmethod={this.props.urlmethod}
        onSubmit={this.props.onSubmit}
        method={this.props.method}
      >
        {this.props.content}
        <button className="col-2 btn btn-primary h-100" type="submit">
          Go
        </button>
      </form>
    )
  }
}

export default QueryForm
