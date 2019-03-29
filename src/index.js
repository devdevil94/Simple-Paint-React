import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColorsGroup from "./components/ColorsGroup";
import Canvas from "./components/Canvas";
import Size from "./components/Size";
import colors from "./ColorsData";

import "./styles.css";

// const MyContext = React.createContext();

// class MyProvider extends Component {
//   state = {};
//   render() {
//     return (
//       <MyContext.Provider value={{
//         state: this.state
//       }}>
//         {this.props.children}
//       </MyContext.Provider>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);

    this.state = {
      currentSize: "x1",
      currentColor: "",
      colors: colors,
      painting: true,
      clickX: [],
      clickY: [],
      clickDrag: [],
      clickColor: [],
      clickSize: [],
      radius: 18
    };
  }
  handleChange(event) {
    this.setState({ currentSize: event.target.value });
  }
  handleClick(name) {
    //Needs some refactoring
    this.setState(prevState => {
      const updatedColors = prevState.colors.map(color => {
        color.isSelected = false;
        return color;
      });
      return { colors: updatedColors };
    });
    this.setState(prevState => {
      let currentColor = "";
      const updatedColors = prevState.colors.map(color => {
        if (name === color.name) {
          color.isSelected = true;
          currentColor = color.hex;
        }
        return color;
      });
      return {
        colors: updatedColors,
        currentColor: currentColor
      };
    });
  }
  handleMouseDown = event => {
    const mouseX = event.clientX - this.offsetLeft;
    const mouseY = event.clientY - this.offsetTop;
    console.log("Hello");

    if (this.state.painting) {
      this.addClick(mouseX, mouseY, true);
      this.updateCanvas();
    }
  };
  addClick(x, y, dragging) {
    this.setState(prevState => {
      let updateClickX = prevState.clickX;
      let updateClickY = prevState.clickY;
      let updateClickDrag = prevState.clickDrag;
      let updateClickColor = prevState.clickColor;
      let updateClickSize = prevState.clickSize;

      updateClickX.push(x);
      updateClickY.push(y);
      updateClickDrag.push(dragging);
      updateClickColor.push(prevState.currentColor);
      updateClickSize.push(prevState.currentSize);

      return {
        clickX: updateClickX,
        clickY: updateClickY,
        clickDrag: updateClickDrag,
        clickColor: updateClickColor,
        clickSize: updateClickSize
      };
    });
  }

  updateCanvas(context) {
    console.log(context);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.lineJoin = "round";

    for (var i = 0; i < this.state.clickX.length; i++) {
      context.beginPath();

      if (this.state.clickDrag[i] && i) {
        context.moveTo(this.state.clickX[i - 1], this.state.clickY[i - 1]);
      } else {
        context.moveTo(this.state.clickX[i] - 1, this.state.clickY[i]);
      }

      context.lineTo(this.state.clickX[i], this.state.clickY[i]);
      context.closePath();
      context.strokeStyle = this.state.clickColor[i];
      context.lineWidth = this.state.radius;
      context.stroke();
    }
  }

  render() {
    const mainRowStyle = {
      display: "flex",
      justifyContent: "space-between"
    };
    const secondRowStyle = {
      width: "100%",
      marginTop: "10px",
      border: "2px solid #000"
    };
    const appStyle = {
      display: "flex",
      flexDirection: "column",
      width: "400px",
      margin: "10px"
    };
    // console.log(
    //   "Color: " + this.state.currentColor + " Size: " + this.state.currentSize
    // );
    return (
      // <MyProvider>
      <div style={appStyle}>
        <div style={mainRowStyle}>
          <Canvas
            handleMouseDown={this.handleMouseDown}
            clickX={this.state.clickX}
            clickY={this.state.clickY}
            clickColor={this.state.clickColor}
            clickSize={this.state.clickSize}
            clickDrag={this.state.clickDrag}
            radius={this.state.radius}
            updateCanvas={this.updateCanvas}
          />
          <ColorsGroup
            handleClick={this.handleClick}
            colors={this.state.colors}
          />
        </div>
        <div style={secondRowStyle}>
          <Size value={this.state.size} handleChange={this.handleChange} />
        </div>
      </div>
      // </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
