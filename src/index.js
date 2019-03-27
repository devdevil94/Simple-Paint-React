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

    this.clickX = new Array();
    this.clickY = new Array();
    this.clickDrag = new Array();
    this.clickColor = new Array();
    this.clickSize = new Array();

    this.state = {
      currentSize: "x1",
      currentColor: "",
      colors: colors,
      painting: true
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
  handleMouseDown(event) {
    const mouseX = event.clientX - this.offsetLeft;
    const mouseY = event.clientY - this.offsetTop;
    console.log("Hello");
    if (this.state.painting) {
      this.addClick(mouseX, mouseY);
      this.updateCanvas();
    }
  }
  addClick(x, y, dragging) {
    this.clickX.push(x);
    this.clickY.push(y);
    this.clickDrag.push(dragging);
    this.clickColor.push(this.state.currentColor);
    this.clickSize.push(this.state.currentSize);
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
    console.log(
      "Color: " + this.state.currentColor + " Size: " + this.state.currentSize
    );
    return (
      // <MyProvider>
      <div style={appStyle}>
        <div style={mainRowStyle}>
          <Canvas
            handleMouseDown={this.handleMouseDown}
            clickX={this.clickX}
            clickY={this.clickY}
            clickColor={this.clickColor}
            clickDrag={this.clickDrag}
            radius={this.radius}
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
