import QueryPageComponent from "./QueryPageComponet"
import React from 'react'

class ItemPage extends QueryPageComponent {
  render = () => {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Item</h1>
            <p className="lead">You can query item information here.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemPage
