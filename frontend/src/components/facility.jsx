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

class FacilityPage extends QueryPageComponent {
  constructor(props) {
    super(props)
    this.state.inputValues.state = ""
    this.prefix = "/facility"

    this.functions = {
      getFacilityByState: result => {
        if (result.code === 200) {
          const table = createTable(result.data)
          this.setState({
            facilityInState: table
          })
        } else {
          this.setState({
            facilityInState: <ErrorMessage msg={result.msg} />
          })
        }
      },
      insertResult: result => {
        alert(result.msg)
      }
    }

    this.insertBody = {}

    this.paramObjs = {
      getFacilityByState: {
        state: ""
      }
    }
  }

  componentDidMount = () => {
    this.insertBody = {
      state: this.state.inputValues.insertState,
      city: this.state.inputValues.insertCity,
      zipCode: this.state.inputValues.insertZipCode,
      detailedAddress: this.state.inputValues.insertDetailedAddress
    }
  }

  componentWillUpdate = () => {
    this.insertBody = {
      state: this.state.inputValues.insertState,
      city: this.state.inputValues.insertCity,
      zipCode: this.state.inputValues.insertZipCode,
      detailedAddress: this.state.inputValues.insertDetailedAddress
    }
  }

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
          <form
            method="get"
            className="border"
            onSubmit={this.handleGetSubmit}
            endpoint="/inState"
            urlmethod="getFacilityByState"
          >
            <div className="row">
              <h4 className="text-center col-12">Search Facility by state</h4>
            </div>
            <div className="row">
              <InputGroup className="mb-3 col-10">
                <InputGroup.Prepend>
                  <InputGroup.Text>State code</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="form-control"
                  placeholder="OH"
                  value={this.state.inputValues.state}
                  onChange={this.handleInputChange}
                  paramkey="state"
                  paramobjkey="getFacilityByState"
                  pattern="^[A-Z]{2}$"
                />
              </InputGroup>
              <button type="submit" className="btn btn-primary btn-md">
                Search
              </button>
            </div>
          </form>
          <div className="row">
            <div className="col-12">{this.state.facilityInState}</div>
          </div>

          <form
            method="post"
            className="border"
            endpoint="/newFacility"
            urlmethod="insertResult"
            jsonbody={JSON.stringify(this.insertBody)}
            onSubmit={this.handleGetSubmit}
          >
            <div className="row">
              <h4 className="col-12 text-center">Insert new Facility record</h4>
            </div>
            <div className="row">
              <InputGroup className="mb-3 col-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>State code</InputGroup.Text>
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
                    className="form-control"
                    placeholder="OH"
                    value={this.state.inputValues.insertState}
                    onChange={this.handleInputChange}
                    paramkey="insertState"
                    pattern="^[A-Z]{2}$"
                  />
                </OverlayTrigger>
              </InputGroup>
              <InputGroup className="mb-3 col-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>City</InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      City where the facility is located
                    </Tooltip>
                  }
                >
                  <FormControl
                    className="form-control"
                    placeholder="Cleveland"
                    value={this.state.inputValues.insertCity}
                    onChange={this.handleInputChange}
                    paramkey="insertCity"
                  />
                </OverlayTrigger>
              </InputGroup>
              <InputGroup className="mb-3 col-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>ZIP</InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>5-digit zip code</Tooltip>
                  }
                >
                  <FormControl
                    className="form-control"
                    placeholder="44106"
                    value={this.state.inputValues.insertZipCode}
                    onChange={this.handleInputChange}
                    paramkey="insertZipCode"
                    pattern="^[0-9]{5}$"
                  />
                </OverlayTrigger>
              </InputGroup>
              <InputGroup className="mb-3 col-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>Detail Address</InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Detailed Street Address
                    </Tooltip>
                  }
                >
                  <FormControl
                    className="form-control"
                    placeholder="1611 E 115th St"
                    value={this.state.inputValues.insertDetailedAddress}
                    onChange={this.handleInputChange}
                    paramkey="insertDetailedAddress"
                  />
                </OverlayTrigger>
              </InputGroup>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">
                  Insert
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default FacilityPage
