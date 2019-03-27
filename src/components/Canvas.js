import React, { Component } from "react";

class Canvas extends Component {
  constructor() {
    super();
  }
  updateCanvas() {
    const context = this.refs.canvas.getContext("2d");
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.lineJoin = "round";

    for (var i = 0; i < this.props.clickX.length; i++) {
      context.beginPath();

      if (this.props.clickDrag[i] && i) {
        context.moveTo(this.props.clickX[i - 1], this.props.clickY[i - 1]);
      } else {
        context.moveTo(this.props.clickX[i] - 1, this.props.clickY[i]);
      }

      context.lineTo(this.props.clickX[i], this.props.clickY[i]);
      context.closePath();
      context.strokeStyle = this.props.clickColor[i];
      context.lineWidth = this.props.radius;
      context.stroke();
    }
  }
  render() {
    const canvasContainerStyle = {
      padding: "10px",
      border: "2px solid #000"
    };
    console.log(this.props);
    return (
      <canvas
        onMouseDown={event => this.props.handleMouseDown}
        style={canvasContainerStyle}
        ref="canvas"
      />
    );
  }
}

export default Canvas;
