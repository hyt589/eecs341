import React from "react"
import ErrorMessage from "./ErrorMessage"
import { createTable } from "../utils/common"
import QueryPageComponent from "./QueryPageComponet"

class OrderPage extends QueryPageComponent {
  constructor(props) {
    super(props)
    this.state.inputValues = {}
    this.state.queryResult = null
    this.functions = {
      getOrderByEmail: result => {
        if (result.code === 200) {
          const table = createTable(result.data)
          this.setState({
            queryResult: table
          })
        } else {
          this.setState({
            queryResult: <ErrorMessage />
          })
        }
      }
    }
    this.paramObjs = {
      getOrderByEmail: {
        email: ""
      }
    }

    this.prefix = "/order"
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Orders</h1>
            <p className="lead">
              You can find information regarding orders on this page.
            </p>
          </div>
        </div>

        <form
          onSubmit={this.handleGetSubmit}
          className="border align-middle"
          endpoint="/id-byEmailExceptReturned"
          urlmethod="getOrderByEmail"
        >
          <div className="form-group row align-middle">
            <div className="col-4 border border-light align-middle">
              <p className="text-center align-middle">
                Find order id by email except returned orders
              </p>
            </div>
            <input
              type="email"
              className="form-control col-6"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleInputChange}
              paramkey="email"
              paramobjkey="getOrderByEmail"
            ></input>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">{this.state.queryResult}</div>
        </div>
      </div>
    )
  }
}

export default OrderPage
