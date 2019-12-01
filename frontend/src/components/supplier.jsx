import QueryPageComponent from "./QueryPageComponet"
import React from "react"
import { createTable } from "../utils/common"
import ErrorMessage from "./ErrorMessage"
import QueryForm from "./QueryForm"

class SupplierPage extends QueryPageComponent {
  constructor(props) {
    super(props)
    this.state.inputValues = {}
    this.state.queryResult = null
    this.displayResult = result => {
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
    this.functions = {
      getAddressByName: this.displayResult,
      listAllNames: this.displayResult
    }
    this.paramObjs = {
      getAddressByName: {
        name: ""
      }
    }
    this.prefix = "/productSupplier"
  }

  render() {
    return (
      <div id="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Supplier</h1>
            <p className="lead">You can query supplier information here.</p>
          </div>
        </div>
        <form
          className="border container"
          endpoint="/address-byName"
          urlmethod="getAddressByName"
          onSubmit={this.handleGetSubmit}
          method="get"
        >
          <div className="form-group row">
            <div className="col-2">Get supplier address by name</div>
            <label htmlFor="supplierName" className="col-1">
              Supplier address
            </label>
            <input
              type="text"
              className="form-control col-6 h-100"
              id="supplierName"
              placeholder="Enter name"
              value={this.state.inputValues.supplierName}
              onChange={this.handleInputChange}
              paramkey="name"
              paramobjkey="getAddressByName"
            />
            <button className="col-2 btn btn-primary h-100" type="submit">
              Get
            </button>
          </div>
        </form>
        <QueryForm
          endpoint="/listAllNames"
          urlmethod="listAllNames"
          onSubmit={this.handleGetSubmit}
          method="get"
          content={
            <div>
              <div className="col-6"> </div>
              <div className="col-2 align-middle"> Get supplier name list </div>
            </div>
          }
        />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 border">{this.state.queryResult}</div>
        </div>
      </div>
    )
  }
}

export default SupplierPage
