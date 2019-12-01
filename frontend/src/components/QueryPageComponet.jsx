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
    console.log(inputValues)
    this.setState({ inputValues: currentState })
    this.paramObjs[target.getAttribute("paramobjkey")][
      target.getAttribute("paramkey")
    ] = target.value
  }

  handleGetSubmit(event) {
    const form = event.target
    const endpoint = form.getAttribute("endpoint")
    let fn = this.functions[form.getAttribute("urlmethod")]
    const params = this.paramObjs[form.getAttribute("urlmethod")]
    console.log(params)
    const url = createURL(this.prefix, endpoint, params)
    enhancedFetch(
      url,
      {
        method: form.getAttribute("method")
      },
      fn
    )
    event.preventDefault()
  }
}

export default QueryPageComponent
