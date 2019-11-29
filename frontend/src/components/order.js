import React from "react";
import api from "../utils/config";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryResult: null };
    this.fetchOrdersByEmail = this.fetchOrdersByEmail.bind(this);
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
        <button
          className="btn btn-primary pull-left"
          onClick={this.fetchOrdersByEmail}
        >
          query 1
        </button>
        <div className="row">{this.state.queryResult}</div>
      </div>
    );
  }

  fetchOrdersByEmail() {
    const prefix = "/order";
    const url = new URL(`${api}${prefix}/id-byEmailExceptReturned`);
    const params = { email: "yxh589@case.edu" };
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
            }
          })
          .catch();
      })
      .catch();
  }
}

export default OrderPage;
