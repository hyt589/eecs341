import React from "react"

class QueryForm extends React.Component {
  render() {
    return (
      <form
        className="border"
        endpoint={this.props.endpoint}
        urlmethod={this.props.urlmethod}
        onSubmit={this.props.onSubmit}
        method={this.props.method}
        jsonbody={this.props.jsonbody}
      >
        
        <div className="col-12">
        {this.props.content}
        <button className="btn btn-primary mh-100 col-2" type="submit">
          Go
        </button>
        </div>
        
      </form>
    )
  }
}

export default QueryForm
