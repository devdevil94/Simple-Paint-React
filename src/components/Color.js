import React, { Component } from "react";

class Color extends Component {
  render() {
    const outerBoxStyle = {
      border: "1px solid #000",
      width: "40px",
      height: "40px",
      margin: "10px",
      position: "relative"
    };
    const innerCircleStyle = {
      width: "33%",
      height: "33%",
      textAlign: "center",
      verticalAlign: "middle",
      backgroundColor: "red",
      borderRadius: "50% 50%",
      position: "absolute",
      top: "33%",
      right: "33%"
    };
    return (
      <div style={outerBoxStyle}>
        <div style={innerCircleStyle} />
      </div>
    );
  }
}

export default Color;
