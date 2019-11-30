import React from "react";
import api from "../utils/config";
import ErrorMessage from "./ErrorMessage";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResult: null,
      email: " "
    };
    this.fetchOrdersByEmail = this.fetchOrdersByEmail.bind(this);
    this.handleEmailInputChange = this.handleEmailInputChange.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
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

        <form onSubmit={this.handleEmailSubmit} className="border align-middle">
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
              onChange={this.handleEmailInputChange}
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
    );
  }

  fetchOrdersByEmail() {
    const prefix = "/order";
    const url = new URL(`${api}${prefix}/id-byEmailExceptReturned`);
    const params = { email: this.state.email };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    fetch(url)
      .then(response => {
        response
          .json()
          .then(result => {
            if (result.code === 200) {
              const data = result.data;
              const tableRows = data.map(obj => {
                console.log(obj);
                return (
                  <tr>
                    {Object.keys(obj).map(key => (
                      <th>{obj[key]}</th>
                    ))}
                  </tr>
                );
              });

              this.setState({
                queryResult: (
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">id</th>
                      </tr>
                    </thead>
                    <tbody>{tableRows}</tbody>
                  </table>
                )
              });
            } else {
              this.setState({ queryResult: <ErrorMessage /> });
            }
          })
          .catch();
      })
      .catch();
  }

  handleEmailInputChange(event) {
    this.setState({ email: event.target.value });
  }

  handleEmailSubmit(event) {
    event.preventDefault();
    this.fetchOrdersByEmail();
  }
}

export default OrderPage;
