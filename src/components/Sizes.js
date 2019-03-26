import React, { Component } from "react";

class Sizes extends Component {
  render() {
    const settingsContainerStyle = {
      padding: "10px"
    };
    return (
      <form style={settingsContainerStyle}>
        <label>
          Size:
          <select>
            <option value="sizex1">x1</option>
            <option value="sizex2">x2</option>
            <option value="sizex3">x3</option>
            <option value="sizex4">x4</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Sizes;
