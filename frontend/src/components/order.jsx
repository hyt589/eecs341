import React from "react"
import ErrorMessage from "./ErrorMessage"
import { createTable, createURL, enhancedFetch } from "../utils/common"
import QueryPageComponent from "./QueryPageComponet"
import QueryForm from "./QueryForm"
import QueryInput from "./QueryInput"
import Select from "./SelectComponent"

class OrderPage extends QueryPageComponent {
  constructor(props) {
    super(props)
    this.newOrderBody = {
      email: this.state.inputValues.email,
      productId: this.state.inputValues.productId,
      qty: this.state.inputValues.orderQty
    }
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
      },
      placeOrder: result => {
        alert(result.msg)
      }
    }
    this.paramObjs = {
      getOrderByEmail: {
        email: ""
      }
    }

    this.prefix = "/order"
  }
  componentDidUpdate() {
    this.newOrderBody = {
      email: this.state.inputValues.email,
      productId: this.state.inputValues.productId,
      qty: this.state.inputValues.orderQty
    }
    console.log(this.newOrderBody)
  }

  render() {
    const insertFormContent = (
      <div className="row">
        <Select
          prefix="/customer"
          endpoint="/mailingList"
          name="Select Email"
          objKeys={["email"]}
          onChange={this.handleInputChange}
          dataKey="email"
        />
        <Select
          prefix="/product"
          endpoint="/idNameSupplier"
          name="Select product"
          objKeys={["id", "supplier", "name"]}
          onChange={this.handleInputChange}
          dataKey="productId"
        />
        <div className="form-control col-2">
          <label htmlFor="qty">Number</label>
          <input
            type="number"
            className="form-control"
            paramkey="orderQty"
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    )
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

        <div className="container">
          <form
            onSubmit={this.handleGetSubmit}
            className="border align-middle"
            endpoint="/id-byEmailExceptReturned"
            urlmethod="getOrderByEmail"
            method="get"
          >
            <div className="form-group row align-middle">
              <div className="col-4 border border-light align-middle">
                <p className="text-center align-middle">
                  Find order by email except returned orders
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
            <QueryForm
              className="col-4"
              content={insertFormContent}
              method="post"
              jsonBody={JSON.stringify(this.newOrderBody)}
              onSubmit={this.handleGetSubmit}
              urlmethod="placeOrder"
              endpoint="/newOrder"
            />
          </div>

          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">{this.state.queryResult}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderPage
