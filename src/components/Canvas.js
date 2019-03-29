import React, { Component } from "react";

class Canvas extends Component {
  constructor() {
    super();
    this.updateCanvas = this.updateCanvas.bind(this);
    this.state = {
      painting: false,
      ctx: null
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

  updateCanvas(event) {
    if (!this.state.painting) return;

    const canvas = this.refs.canvas;
    this.setState({ ctx: canvas.getContext("2d") });

    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    console.log(mouseX + " " + mouseY);

    // this.state.ctx.clerRect(0, 0, 300, 224);
    this.state.ctx.lineWidth = 5;
    this.state.ctx.lineCap = "round";

    this.state.ctx.lineTo(mouseX, mouseY);
    this.state.ctx.stroke();
    this.state.ctx.beginPath();
    this.state.ctx.moveTo(mouseX, mouseY);

    // this.state.ctx.lineTo(50, 50);
    // this.state.ctx.stroke();
  }
  startPainting() {
    this.setState({ painting: true });
    console.log("start");
  }
  stopPainting() {
    this.setState({ painting: false });
    this.state.ctx.beginPath();
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
          this.updateCanvas(event);
        }}
        style={canvasContainerStyle}
        ref="canvas"
      />
    );
  }
}

export default Canvas;
