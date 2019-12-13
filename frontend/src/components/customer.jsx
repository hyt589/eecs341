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
        <div className="container">
          <ul>
            <li>Create new account with all table fields except id, gmt_create and gmt_modified</li>
            <li>Change email address</li>
            <li>Change all billing address fields</li>
            <li>Change all shipping address fields</li>
            <li>Get id by email</li>
            <li>Get shipping address by email</li>
            <li>Get billing address by email</li>
            <li>Remove a record by email</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CustomerPage
