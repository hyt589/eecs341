import React from "react"
import QueryPageComponent from "./QueryPageComponet"

class CustomerPage extends QueryPageComponent {
  render = () => {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Customer</h1>
            <p className="lead">You can query customer information here.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomerPage
