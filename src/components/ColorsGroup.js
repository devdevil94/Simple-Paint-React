import React, { Component } from "react";
import Color from "./Color";

class ColorsGroup extends Component {
  constructor() {
    super();
  }

  render() {
    const colorsContainerStyle = {
      padding: "10px",
      border: "2px solid #000",
      margin: "10px",
      width: "64px"
    };

    return (
      <div style={colorsContainerStyle}>
        {/* <h5>Colors</h5> */}
        {this.props.colors.map(color => {
          return (
            <Color
              key={color.name}
              color={color}
              handleClick={this.props.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default ColorsGroup;
