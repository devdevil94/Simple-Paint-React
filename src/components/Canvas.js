import React, { Component } from "react";

class Canvas extends Component {
  constructor() {
    super();
    this.updateCanvas = this.updateCanvas.bind(this);
    this.state = {
      painting: false
    };
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.lineTo(50, 50);
    // ctx.stroke();
    // console.log(ctx);
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext("2d");
    // ctx.clerRect(0, 0, 300, 224);

    // ctx.beginPath();
    // ctx.moveTo(10, 10);
    // ctx.lineTo(50, 50);
    // ctx.stroke();
  }
  startPainting() {
    this.setState({ painting: true });
    console.log("start");
  }
  stopPainting() {
    this.setState({ painting: false });
    console.log("stop");
  }
  render() {
    const canvasContainerStyle = {
      border: "2px solid #000"
    };
    return (
      <canvas
        // width={300}
        // height={224}
        onMouseDown={event => {
          this.startPainting();
        }}
        onMouseUp={event => {
          this.stopPainting();
        }}
        onMouseMove={event => {
          this.updateCanvas();
        }}
        style={canvasContainerStyle}
        ref="canvas"
      />
    );
  }
}

export default Canvas;
