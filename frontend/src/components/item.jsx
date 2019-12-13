import QueryPageComponent from "./QueryPageComponet"
import React from "react"

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
        <div className="container">
          <ul>
            <li>
              Filter items in facility by status, product, product category, and
              supplier (try this with except or not exist, i.e. broken drinkware
              from Lipton; maybe paramterize the criteria to make the sql extremely dynamic?)
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ItemPage
