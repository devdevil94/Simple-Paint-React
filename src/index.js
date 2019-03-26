import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColorsGroup from "./components/ColorsGroup";
import Canvas from "./components/Canvas";

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
  render() {
    const mainRowStyle = {
      display: "flex"
    };
    const secondRowStyle = {
      width: "100%",
      border: "2px solid #000",
      marginLeft: "10px"
    };
    const appStyle = {
      display: "flex",
      flexDirection: "column"
    };
    return (
      // <MyProvider>
      <div style={appStyle}>
        <div style={mainRowStyle}>
          <Canvas />
          <ColorsGroup />
        </div>
        <div style={secondRowStyle}>Hi</div>
      </div>
      // </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
