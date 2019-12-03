import React from "react"

class QueryForm extends React.Component {
  render() {
    return (
      <form
        className="border col-12"
        endpoint={this.props.endpoint}
        urlmethod={this.props.urlmethod}
        onSubmit={this.props.onSubmit}
        method={this.props.method}
        jsonBody={this.props.jsonBody}
      >
        
        <div className="">
        {this.props.content}
        <button className="btn btn-primary mh-100" type="submit">
          Go
        </button>
        </div>
        
      </form>
    )
  }
}

export default QueryForm
