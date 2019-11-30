import React from "react";
import { enhancedFetch, createURL, createTable } from "../utils/common";
import ErrorMessage from "./ErrorMessage";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: {
        category: ''
      },
      queryResult: null
    };
    this.functions = {
      getQtyByCategory: result => {
        if (result.code === 200) {
          const data = result.data;
          console.log(data);
          const table = createTable(data);
          this.setState({
            queryResult: table
          });
        } else {
          this.setState({ queryResult: <ErrorMessage /> });
        }
      }
    }
    this.paramObjs ={
      getQtyByCategory:{
        category: ''
      }
    }
    this.prefix = "/product";
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target =  event.target
    const {inputValues} = {...this.state}
    const currentState = inputValues
    inputValues[target.getAttribute('paramkey')] = target.value
    this.setState({inputValues: currentState})
    this.paramObjs[target.getAttribute('paramobjkey')][target.getAttribute('paramkey')] = target.value
  }

  handleSubmit(event) {
    const form = event.target;
    const endpoint = form.getAttribute("endpoint");
    let fn = this.functions[form.getAttribute("urlmethod")];
    const params = this.paramObjs[form.getAttribute("urlmethod")];
    console.log(params)
    const url = createURL(this.prefix, endpoint, params);
    enhancedFetch(url, {}, fn);
    event.preventDefault();
  }

  render() {
    return (
      <div id="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Product</h1>
            <p className="lead">You can query product information here.</p>
          </div>
        </div>
        <form
          className="border"
          onSubmit={this.handleSubmit}
          endpoint="/qtyInStock-byCategory"
          urlmethod="getQtyByCategory"
        >
          <div class="form-group row">
            <div className="col-2">Get qty in stock by product category</div>
            <label for="getQtyByCat-category" className="col-1">
              Product Category
            </label>
            <input
              type="text"
              class="form-control col-6 h-100"
              id="getQtyByCat-category"
              aria-describedby="emailHelp"
              placeholder="Enter category"
              value={this.state.inputValues.category}
              onChange={this.handleInputChange}
              paramkey="category"
              paramobjkey="getQtyByCategory"
            ></input>
            <button type="submit" className="col-2 btn btn-primary h-100">
              Submit
            </button>
          </div>
        </form>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 border">{this.state.queryResult}</div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
