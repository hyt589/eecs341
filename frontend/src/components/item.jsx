import QueryPageComponent from "./QueryPageComponet"
import React from "react"
import {
  InputGroup,
  FormControl,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap"
import { createTable } from "../utils/common"
import ErrorMessage from "./ErrorMessage"

class ItemPage extends QueryPageComponent {
  constructor(props) {
    super(props)
    this.prefix = "/item"
    this.state.inputValues.states = ""
    this.state.inputValues.productCategories = ""
    this.state.inputValues.suppliers = ""
    this.state.inputValues.itemStatus = ""
    this.filterItemBody = {}
    this.functions = {
      filterItems: result => {
        if (result.code === 200) {
          const table = createTable(result.data)
          this.setState({
            filteredItems: table
          })
        } else {
          this.setState({
            filteredItems: <ErrorMessage msg={result.msg} />
          })
        }
      }
    }
  }

  componentDidMount = () => {
    this.filterItemBody = {
      facilityStates: this.state.inputValues.states
        .split(",")
        .filter(s => s !== ""),
      productCategories: this.state.inputValues.productCategories
        .split(",")
        .filter(s => s !== ""),
      suppliers: this.state.inputValues.suppliers
        .split(",")
        .filter(s => s !== ""),
      itemStatus: this.state.inputValues.itemStatus
        .split(",")
        .filter(s => s !== "")
    }
    // console.log(this.filterItemBody)
  }

  componentWillUpdate = () => {
    this.filterItemBody = {
      facilityStates: this.state.inputValues.states
        .split(",")
        .filter(s => s !== ""),
      productCategories: this.state.inputValues.productCategories
        .split(",")
        .filter(s => s !== ""),
      suppliers: this.state.inputValues.suppliers
        .split(",")
        .filter(s => s !== ""),
      itemStatus: this.state.inputValues.itemStatus
        .split(",")
        .filter(s => s !== "")
    }
    console.log(this.filterItemBody)
  }

  render = () => {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Item</h1>
            <p className="lead">You can query item information here.</p>
          </div>
        </div>
        <div className="container">
          <form
            method="post"
            onSubmit={this.handleGetSubmit}
            className="border"
            endpoint="/byVariousConditions"
            urlmethod="filterItems"
            jsonbody={JSON.stringify(this.filterItemBody)}
          >
            <div className="row">
              <h4 className="text-center col-12">
                Filter Items by location, category, supplier, and status
              </h4>
            </div>
            <div className="row">
              <InputGroup className="mb-3 col-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="statesInput">
                    State codes
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Accepted regex pattern{" "}
                      <strong>{"^[A-Z]{2}(,[A-Z]{2})*$"}</strong>. <br />
                      2-letter state codes, seperated by comma
                    </Tooltip>
                  }
                >
                  <FormControl
                    className="form-control align-self-center"
                    placeholder="state codes, seperate by commas"
                    value={this.state.inputValues.states}
                    onChange={this.handleInputChange}
                    paramkey="states"
                    pattern="^[A-Z]{2}(,[A-Z]{2})*$"
                    aria-label="Username"
                    aria-describedby="statesInput"
                  />
                </OverlayTrigger>
              </InputGroup>

              <InputGroup className="mb-3 col-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="categoryInput">Category</InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Accepted regex pattern{" "}
                      <strong>{"^[A-Za-z]+(,[A-Za-z]+)*$"}</strong>. <br />
                      Category of product, seperated by comma, eg.
                      "tea,drinkware"
                    </Tooltip>
                  }
                >
                  <FormControl
                    className="form-control align-self-center"
                    placeholder="Product categories, seperated by commas"
                    value={this.state.inputValues.productCategories}
                    onChange={this.handleInputChange}
                    paramkey="productCategories"
                    pattern="^[A-Za-z]+(,[A-Za-z]+)*$"
                    aria-label="Username"
                    aria-describedby="categoryInput"
                  />
                </OverlayTrigger>
              </InputGroup>

              <InputGroup className="mb-3 col-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="suppliers">Suppliers</InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Accepted regex pattern{" "}
                      <strong>{"^[A-Za-z]+(,[A-Za-z]+)*$"}</strong>. <br />
                      Supplier names, seperated by comma
                    </Tooltip>
                  }
                >
                  <FormControl
                    className="form-control align-self-center"
                    placeholder="Supplier names"
                    value={this.state.inputValues.suppliers}
                    onChange={this.handleInputChange}
                    paramkey="suppliers"
                    pattern="^[A-Za-z]+(,[A-Za-z]+)*$"
                    aria-label="Username"
                    aria-describedby="suppliers"
                  />
                </OverlayTrigger>
              </InputGroup>

              <InputGroup className="mb-3 col-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="itemStatus">Item Status</InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      There are only 4 different status:{" "}
                      <strong>in_stock, damaged, sold, lost</strong>
                    </Tooltip>
                  }
                >
                  <FormControl
                    className="form-control align-self-center"
                    placeholder="Item status"
                    value={this.state.inputValues.itemStatus}
                    onChange={this.handleInputChange}
                    paramkey="itemStatus"
                    pattern="^(in_stock|damaged|sold|lost)(,(in_stock|damaged|sold|lost))*$"
                    aria-label="Username"
                    aria-describedby="itemStatus"
                  />
                </OverlayTrigger>
              </InputGroup>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">
                  Get items
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-12">{this.state.filteredItems}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemPage
