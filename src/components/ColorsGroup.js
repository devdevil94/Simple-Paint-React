import React, { Component } from "react";
import Color from "./Color";
import colors from "../ColorsData";

class ColorsGroup extends Component {
  render() {
    const colorsContainerStyle = {
      padding: "10px",
      border: "2px solid #000",
      margin: "10px",
      width: "64px"
    };

    return (
      <div style={colorsContainerStyle}>
        {colors.map(color => {
          return <Color key={color.name} colorHex={color.hex} />;
        })}
      </div>
    );
  }
}

export default ColorsGroup;
