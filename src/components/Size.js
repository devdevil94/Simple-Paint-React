import React, { Component } from "react";

class Size extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "x2"
    };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    const settingsContainerStyle = {
      padding: "10px"
    };
    return (
      <form style={settingsContainerStyle}>
        <label>
          Size:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="x1">x1</option>
            <option value="x2">x2</option>
            <option value="x3">x3</option>
            <option value="x4">x4</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Size;
