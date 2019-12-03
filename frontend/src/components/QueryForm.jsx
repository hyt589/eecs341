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
        jsonBody={this.props.jsonBody}
      >
        <div className="row">
        {this.props.content}
        <button className="btn btn-primary h-100" type="submit">
          Go
        </button>
        </div>
        
      </form>
    )
  }
}

export default QueryForm
