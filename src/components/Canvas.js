import React, { Component } from "react";

class Canvas extends Component {
  render() {
    const canvasContainerStyle = {
      padding: "10px",
      border: "2px solid #000",
      margin: "10px"
    };

    return <canvas style={canvasContainerStyle} width="" height="100%" />;
  }
}

export default Canvas;
