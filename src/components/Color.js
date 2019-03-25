import React, { Component } from "react";

class Color extends Component {
  render() {
    const outerBoxStyle = {
      border: "1px solid #000",
      width: "50px",
      height: "50px",
      display: "table"
    };
    const innerCircleStyle = {
      maxWidth: "20px",
      maxHeight: "20px",
      display: "table-cell",
      textAlign: "center",
      verticalAlign: "middle",
      backgroundColor: "red",
      borderRadius: "50% 50%"
    };
    return (
      <div>
        <div style={outerBoxStyle}>
          <span style={innerCircleStyle} />
        </div>
      </div>
    );
  }
}

export default Color;
