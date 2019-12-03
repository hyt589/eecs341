import React from "react"
import { createURL, enhancedFetch } from "../utils/common"

class QueryPageComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValues: {}
    }
    this.functions = {}
    this.paramObjs = {}

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleGetSubmit = this.handleGetSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const { inputValues } = { ...this.state }
    const currentState = inputValues
    inputValues[target.getAttribute("paramkey")] = target.value
    console.log(this.state)
    this.setState({ inputValues: currentState })
    if (this.paramObjs[target.getAttribute("paramobjkey")] !== undefined) {
      this.paramObjs[target.getAttribute("paramobjkey")][
        target.getAttribute("paramkey")
      ] = target.value
    }
  }

  handleGetSubmit(event) {
    const form = event.target
    const endpoint = form.getAttribute("endpoint")
    let fn = this.functions[form.getAttribute("urlmethod")]
    const params = this.paramObjs[form.getAttribute("urlmethod")]
    const url = createURL(this.prefix, endpoint, params)
    console.log(typeof form);
    
    enhancedFetch(
      url,
      {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        method: form.getAttribute("method"),
        body: form.getAttribute("jsonBody")
      },
      fn
    )
    event.preventDefault()
  }
}

export default QueryPageComponent
