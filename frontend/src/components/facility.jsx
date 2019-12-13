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
        <div className="container">
          <ul>
            <li>Get all items in facility</li>
            <li>Get all incoming items by facility</li>
            <li>Get all outgoing items by facility</li>
            <li>Filter facilities by state and zip code (try with except or not exist, i.e. facilities in OH but has zip code other than 44106)</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FacilityPage
