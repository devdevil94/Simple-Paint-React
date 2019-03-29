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
    // this.handleMouseDown = this.handleMouseDown.bind(this);

    this.state = {
      currentSize: "x1",
      currentColor: "",
      colors: colors,
      painting: true,
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
  // handleMouseDown = event => {};

  // updateCanvas(context) {}

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
          <Canvas />
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
