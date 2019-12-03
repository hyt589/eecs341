import React from "react"
import { createURL, enhancedFetch } from "../utils/common"

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.prefix = props.prefix
    this.endpoint = props.endpoint
    this.name = props.name
    this.objKeys = props.objKeys
    this.dataKey = props.dataKey
    this.state = {
      selector: null
    }
    this.onChange = props.onChange
    if (this.onChange !== undefined) {
        this.onChange = this.onChange.bind(this)
    }
  }


  componentWillMount() {
    const url = createURL(this.prefix, this.endpoint, {})
    enhancedFetch(
      url,
      {
        method: "get"
      },
      result => {
        const selector = (
          <select
            className="form-control selectpicker"
            name={this.dataKey}
            id={this.dataKey}
            onChange={this.onChange}
            paramkey={this.dataKey}
          >
            {result.data.map((obj, i) => (
              <option value={obj[this.objKeys[0]]} key={i}>
                {this.objKeys.map(key => key +": " + obj[key]).join(" || ")}
              </option>
            ))}
          </select>
        )
        this.setState({
          selector: selector
        })
      }
    )
  }

  render = () => (
    <div className="form-group col-4">
      <label htmlFor={this.dataKey}>{this.name}</label>
      {this.state.selector}
    </div>
  )
}

export default Select
