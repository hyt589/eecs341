import React from "react"
import ErrorMessage from "./ErrorMessage"
import {
  createTable,
  createURL,
  enhancedFetch,
  init,
  initializeValues
} from "../utils/common"
import QueryPageComponent from "./QueryPageComponet"
import QueryForm from "./QueryForm"
import QueryInput from "./QueryInput"
import Select from "./SelectComponent"

class OrderPage extends QueryPageComponent {
  constructor(props) {
    super(props)
    this.newOrderBody = {
      email: this.state.inputValues.insertEmail,
      productId: this.state.inputValues.productId,
      qty: this.state.inputValues.orderQty
    }
    this.state.inputValues = {}
    this.state.queryResult = null
    this.insertOrderSubmit=(event)=>{
      if (
        this.state.inputValues.inertEmail !== undefined &&
        this.state.inputValues.productId !== undefined &&
        this.state.inputValues.orderQty !== undefined &&
        this.state.inputValues.orderQty !== null
      ) {
        this.handleGetSubmit(event)
      }else{
        alert("Please fill out all fields")
        event.preventDefault()
      }
    }
    this.functions = {
      getOrderByEmail: result => {
        if (result.code === 200) {
          const table = createTable(result.data)
          this.setState({
            queryResult: table
          })
        } else {
          this.setState({
            queryResult: <ErrorMessage msg={result.msg} />
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
      email: this.state.inputValues.inertEmail,
      productId: this.state.inputValues.productId,
      qty: this.state.inputValues.orderQty
    }
    console.log(this.newOrderBody)
  }

  render() {
    const insertFormContent = (
      <div className="row d-flex">
        <div className="col-3 align-self-center">Insert new Order record</div>
        <Select
        className="col-3"
          parent={this}
          initialization={value => {
            console.log(this)

            const { inputValues } = { ...this.state }
            const currentState = inputValues
            currentState.inertEmail = value
            this.setState({
              inputValues: currentState
            })
          }}
          prefix="/customer"
          endpoint="/mailingList"
          name="Select Email"
          objKeys={["email"]}
          onChange={this.handleInputChange}
          dataKey="inertEmail"
        />
        <Select
        className="col-3"
          parent={this}
          initialization={value => {
            console.log(this)

            const { inputValues } = { ...this.state }
            const currentState = inputValues
            currentState.productId = value
            this.setState({
              inputValues: currentState
            })
          }}
          prefix="/product"
          endpoint="/idNameSupplier"
          name="Select product"
          objKeys={["id", "supplier", "name"]}
          onChange={this.handleInputChange}
          dataKey="productId"
        />
        <div className="form-group col-3">
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
            <div className="form-group row align-middle d-flex">
              <div className="col-4 border border-light align-middle align-self-center">
                <p className="text-center align-middle">
                  Find order by email except returned orders
                </p>
              </div>
              <input
                type="email"
                className="form-control col-6 align-self-center"
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

          <div className>
            <QueryForm
              className="col-4"
              content={insertFormContent}
              method="post"
              jsonBody={JSON.stringify(this.newOrderBody)}
              onSubmit={this.insertOrderSubmit}
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
