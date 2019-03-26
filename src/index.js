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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentSize: "",
      currentColor: "",
      colors: colors
    };
  }

  handleClick(name) {
    this.setState(prevState => {
      const updatedColors = prevState.colors.map(color => {
        color.isSelected = false;
        return color;
      });
      return { colors: updatedColors };
    });
    this.setState(prevState => {
      const updatedColors = prevState.colors.map(color => {
        if (name === color.name) color.isSelected = true;
        return color;
      });
      return { colors: updatedColors };
    });
  }
  render() {
    const mainRowStyle = {
      display: "flex",
      justifyContent: "space-between"
    };
    const secondRowStyle = {
      width: "100%",
      border: "2px solid #000",
      marginLeft: "10px"
    };
    const appStyle = {
      display: "flex",
      flexDirection: "column",
      width: "400px"
    };
    console.log("Color: " + this.state.color + " Size: " + this.state.size);
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
          <Size />
        </div>
      </div>
      // </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
