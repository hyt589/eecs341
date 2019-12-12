import QueryPageComponent from "./QueryPageComponet"
import React from 'react'

class FacilityPage extends QueryPageComponent {
  render = () => {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Facility</h1>
            <p className="lead">You can query facility information here.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FacilityPage
