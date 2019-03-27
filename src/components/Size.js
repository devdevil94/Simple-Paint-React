import React, { Component } from "react";

class Size extends Component {
  render() {
    const settingsContainerStyle = {
      padding: "10px"
    };
    return (
      <form style={settingsContainerStyle}>
        <label>
          Size:
          <select value={this.props.value} onChange={this.props.handleChange}>
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
