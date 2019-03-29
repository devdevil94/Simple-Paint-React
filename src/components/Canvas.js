import React, { Component } from "react";

class Canvas extends Component {
  constructor() {
    super();
  }

  render() {
    const canvasContainerStyle = {
      padding: "10px",
      border: "2px solid #000"
    };
    let context = null;
    if (this.refs.canvas) {
      context = this.refs.canvas.getContext("2d");
    }
    console.log(context);
    return (
      <canvas
        onMouseDown={event => {
          this.props.handleMouseDown(event);
          this.props.updateCanvas(context);
        }}
        style={canvasContainerStyle}
        ref="canvas"
      />
    );
  }
}

export default Canvas;
