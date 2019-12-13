import React from "react"
import QueryPageComponent from "./QueryPageComponet"
import {
  InputGroup,
  OverlayTrigger,
  Tooltip,
  FormControl
} from "react-bootstrap"

class CustomerPage extends QueryPageComponent {
  constructor(props) {
    super(props)
    this.prefix = "/customer"
    this.insertUserObj = {}
    this.functions = {
      insertAccount: result => {
        alert(result.msg)
      }
    }
  }

  componentDidMount = () => {
    this.insertUserObj = {
      username: this.state.inputValues.insertUsername,
      email_address: this.state.inputValues.insertEmailAddress,
      shipping_address: this.state.inputValues.insertShippingAddress,
      shipping_city: this.state.inputValues.insertShippingCity,
      shipping_state: this.state.inputValues.insertShippingState,
      shipping_zip: this.state.inputValues.insertShippingZip,
      billing_address: this.state.inputValues.insertBillingAddress,
      billing_city: this.state.inputValues.insertBillingCity,
      billing_state: this.state.inputValues.insertBillingState,
      billing_zip: this.state.inputValues.insertBillingZip
    }
  }
  componentWillUpdate = () => {
    this.insertUserObj = {
      username: this.state.inputValues.insertUsername,
      email_address: this.state.inputValues.insertEmailAddress,
      shipping_address: this.state.inputValues.insertShippingAddress,
      shipping_city: this.state.inputValues.insertShippingCity,
      shipping_state: this.state.inputValues.insertShippingState,
      shipping_zip: this.state.inputValues.insertShippingZip,
      billing_address: this.state.inputValues.insertBillingAddress,
      billing_city: this.state.inputValues.insertBillingCity,
      billing_state: this.state.inputValues.insertBillingState,
      billing_zip: this.state.inputValues.insertBillingZip
    }
  }

  render = () => {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Customer</h1>
            <p className="lead">You can query customer information here.</p>
          </div>
        </div>
        <div className="container">
          <form
            method="post"
            className="border"
            onSubmit={this.handleGetSubmit}
            endpoint="/newCustomerAccount"
            jsonbody={JSON.stringify(this.insertUserObj)}
            urlmethod="insertAccount"
          >
            <div className="row">
              <h4 className="col-12 text-center">
                Register a new customer account
              </h4>
            </div>
            <div className="row">
              <InputGroup className="mb-3 col-6">
                <InputGroup.Prepend>
                  <InputGroup.Text>Username</InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Your personalized username. <br /> At least 5 characters.
                      <br /> Only letters, underscores and hyphens are allowed
                    </Tooltip>
                  }
                >
                  <FormControl
                    className="form-control align-self-center"
                    placeholder="username"
                    value={this.state.inputValues.insertUsername}
                    onChange={this.handleInputChange}
                    paramkey="insertUsername"
                    pattern="^[a-zA-Z-_]{5}[a-zA-Z-_]*$"
                    aria-label="Username"
                    aria-describedby="statesInput"
                  />
                </OverlayTrigger>
              </InputGroup>
              <InputGroup className="mb-3 col-6">
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <OverlayTrigger
                  key="top"
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      Eamil addres. <strong>abc@example.com</strong>
                    </Tooltip>
                  }
                >
                  <FormControl
                    className="form-control align-self-center"
                    placeholder="email@example.com"
                    value={this.state.inputValues.insertEmailAddress}
                    onChange={this.handleInputChange}
                    paramkey="insertEmailAddress"
                    pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+$"
                    aria-label="Username"
                    aria-describedby="statesInput"
                  />
                </OverlayTrigger>
              </InputGroup>
            </div>
            <fieldset className="border">
              <legend className="row">Shipping Address</legend>
              <div className="row">
                <InputGroup className="mb-3 col-6">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Street Address</InputGroup.Text>
                  </InputGroup.Prepend>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>Your street address</Tooltip>
                    }
                  >
                    <FormControl
                      className="form-control align-self-center"
                      placeholder="1596 E 116th St"
                      value={this.state.inputValues.insertShippingAddress}
                      onChange={this.handleInputChange}
                      paramkey="insertShippingAddress"
                      aria-label="Username"
                      aria-describedby="statesInput"
                    />
                  </OverlayTrigger>
                </InputGroup>
                <InputGroup className="mb-3 col-6">
                  <InputGroup.Prepend>
                    <InputGroup.Text>City</InputGroup.Text>
                  </InputGroup.Prepend>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={<Tooltip id={`tooltip-top`}>Your city</Tooltip>}
                  >
                    <FormControl
                      className="form-control align-self-center"
                      placeholder="Cleveland"
                      value={this.state.inputValues.insertShippingCity}
                      onChange={this.handleInputChange}
                      paramkey="insertShippingCity"
                      aria-label="Username"
                      aria-describedby="statesInput"
                    />
                  </OverlayTrigger>
                </InputGroup>
              </div>
              <div className="row">
                <InputGroup className="mb-3 col-6">
                  <InputGroup.Prepend>
                    <InputGroup.Text>State</InputGroup.Text>
                  </InputGroup.Prepend>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        2-letter abbreviation of your state
                      </Tooltip>
                    }
                  >
                    <FormControl
                      className="form-control align-self-center"
                      placeholder="OH"
                      value={this.state.inputValues.insertShippingState}
                      onChange={this.handleInputChange}
                      paramkey="insertShippingState"
                      pattern="^[A-Z]{2}$"
                      aria-label="Username"
                      aria-describedby="statesInput"
                    />
                  </OverlayTrigger>
                </InputGroup>
                <InputGroup className="mb-3 col-6">
                  <InputGroup.Prepend>
                    <InputGroup.Text>ZIP</InputGroup.Text>
                  </InputGroup.Prepend>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>5-digit ZIP code</Tooltip>
                    }
                  >
                    <FormControl
                      className="form-control align-self-center"
                      placeholder="44106"
                      value={this.state.inputValues.insertShippingZip}
                      onChange={this.handleInputChange}
                      paramkey="insertShippingZip"
                      pattern="^\d{5}$"
                      aria-label="Username"
                      aria-describedby="statesInput"
                    />
                  </OverlayTrigger>
                </InputGroup>
              </div>
            </fieldset>
            <fieldset className="border">
              <legend className="row">Billing Address</legend>
              <div className="row">
                <InputGroup className="mb-3 col-6">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Street Address</InputGroup.Text>
                  </InputGroup.Prepend>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>Your street address</Tooltip>
                    }
                  >
                    <FormControl
                      className="form-control align-self-center"
                      placeholder="1596 E 116th St"
                      value={this.state.inputValues.insertBillingAddress}
                      onChange={this.handleInputChange}
                      paramkey="insertBillingAddress"
                      aria-label="Username"
                      aria-describedby="statesInput"
                    />
                  </OverlayTrigger>
                </InputGroup>
                <InputGroup className="mb-3 col-6">
                  <InputGroup.Prepend>
                    <InputGroup.Text>City</InputGroup.Text>
                  </InputGroup.Prepend>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={<Tooltip id={`tooltip-top`}>Your city</Tooltip>}
                  >
                    <FormControl
                      className="form-control align-self-center"
                      placeholder="Cleveland"
                      value={this.state.inputValues.insertBillingCity}
                      onChange={this.handleInputChange}
                      paramkey="insertBillingCity"
                      aria-label="Username"
                      aria-describedby="statesInput"
                    />
                  </OverlayTrigger>
                </InputGroup>
              </div>
              <div className="row">
                <InputGroup className="mb-3 col-6">
                  <InputGroup.Prepend>
                    <InputGroup.Text>State</InputGroup.Text>
                  </InputGroup.Prepend>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>
                        2-letter abbreviation of your state
                      </Tooltip>
                    }
                  >
                    <FormControl
                      className="form-control align-self-center"
                      placeholder="OH"
                      value={this.state.inputValues.insertBillingState}
                      onChange={this.handleInputChange}
                      paramkey="insertBillingState"
                      pattern="^[A-Z]{2}$"
                      aria-label="Username"
                      aria-describedby="statesInput"
                    />
                  </OverlayTrigger>
                </InputGroup>
                <InputGroup className="mb-3 col-6">
                  <InputGroup.Prepend>
                    <InputGroup.Text>ZIP</InputGroup.Text>
                  </InputGroup.Prepend>
                  <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-top`}>5-digit ZIP code</Tooltip>
                    }
                  >
                    <FormControl
                      className="form-control align-self-center"
                      placeholder="44106"
                      value={this.state.inputValues.insertBillingZip}
                      onChange={this.handleInputChange}
                      paramkey="insertBillingZip"
                      pattern="^\d{5}$"
                      aria-label="Username"
                      aria-describedby="statesInput"
                    />
                  </OverlayTrigger>
                </InputGroup>
              </div>
            </fieldset>
            <div className="row">
              <div className="col-1"></div>
              <button
                type="submit"
                className="btn btn-primary btn-block col-10"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CustomerPage
