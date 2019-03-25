import React, { Component } from "react";

class Color extends Component {
  state = {
    isSelected: false
  };
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { isSelected: !prevState.isSelected };
    });
  }
  render() {
    const outerBoxStyle = {
      border: "1px solid #000",
      width: "40px",
      height: "40px",
      margin: "10px",
      position: "relative"
    };
    const innerCircleStyle = {
      width: "33%",
      height: "33%",
      textAlign: "center",
      verticalAlign: "middle",
      backgroundColor: "red",
      borderRadius: "50% 50%",
      position: "absolute",
      top: "33%",
      right: "33%"
    };
    outerBoxStyle["borderColor"] = this.state.isSelected ? "red" : "#000";

    return (
      <div onClick={this.handleClick} style={outerBoxStyle}>
        <div style={innerCircleStyle} />
        {console.log(this.state.isSelected)}
      </div>
    );
  }
}

export default Color;
