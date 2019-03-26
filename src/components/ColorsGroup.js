import React, { Component } from "react";
import Color from "./Color";
import colors from "../ColorsData";

class ColorsGroup extends Component {
  constructor() {
    super();
    this.state = { colors: colors };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(name) {
    this.setState(prevState => {
      const updatedColors = prevState.colors.map(color => {
        color.isSelected = false;
        return color;
      });
      return { colors: updatedColors };
    });
    this.setState(prevState => {
      const updatedColors = prevState.colors.map(color => {
        if (name === color.name) color.isSelected = true;
        return color;
      });
      return { colors: updatedColors };
    });
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
        <h5>Colors</h5>
        {this.state.colors.map(color => {
          return (
            <Color
              key={color.name}
              color={color}
              handleClick={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default ColorsGroup;
