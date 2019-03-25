import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColorsGroup from "./components/ColorsGroup";

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
    return (
      // <MyProvider>
      <div>
        <ColorsGroup />
      </div>
      // </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
