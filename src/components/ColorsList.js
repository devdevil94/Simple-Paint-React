import React, { Component } from "react";
import Color from "./Color";

class ColorsList extends Component {
  render() {
    const colorBoxStyle = {};
    const innerCircleStyle = {};
    return (
      <div>
        <Color />
      </div>
    );
  }
}

export default ColorsList;
