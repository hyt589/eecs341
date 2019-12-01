import React from 'react'

class QueryInput extends React.Component{

    render = () => (
        <div className="form-group row">
            <div className="col-2">
                {this.props.queryDesc}
            </div>
            <label htmlFor="input" className="col-1">
                {this.props.paramName}
            </label>
            <input 
            type={this.props.type}
            className="form-control col-6 h-100"
            id="input"
            placeholder={`Enter ${this.props.paramName}`}
            value={this.props.value}
            onChange={this.props.onChange}
            paramkey={this.props.paramkey}
            paramobjkey={this.props.paramobjkey}
            />
        </div>
    )
}

export default QueryInput