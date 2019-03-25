import React, { Component } from "react";
import ReactDOM from "react-dom";
import ColorsList from "./components/ColorsList";
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
  render() {
    return (
      // <MyProvider>
      <div>
        <ColorsList />
      </div>
      // </MyProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
