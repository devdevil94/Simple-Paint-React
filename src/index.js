import React from "react";
import ReactDOM from "react-dom";
import ColorsList from "./components/ColorsList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ColorsList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
