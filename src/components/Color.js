import React, { Component } from "react";

class Color extends Component {
  render() {
    const outerBoxStyle = {
      border: "1px solid #000",
      width: "40px",
      height: "40px",
      position: "relative",
      margin: "4px 0"
    };
    const innerCircleStyle = {
      width: "33%",
      height: "33%",
      textAlign: "center",
      verticalAlign: "middle",
      backgroundColor: this.props.color.hex,
      borderRadius: "50% 50%",
      position: "absolute",
      top: "33%",
      right: "33%"
    };

    outerBoxStyle["borderColor"] = this.props.color.isSelected ? "red" : "#000";

    return (
      <div
        onClick={event => this.props.handleClick(this.props.color.name)}
        style={outerBoxStyle}
      >
        <div style={innerCircleStyle} />
      </div>
    );
  }
}

export default Color;
