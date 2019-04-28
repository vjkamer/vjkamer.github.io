// Dependencies
import React, { Component } from "react";
import "./bg";
import "./index.scss";

const circles = Array.from(Array(400).keys());

class Background extends Component {
  render() {
    return (
      <div className="background">
        <div className="canvas">
          {circles.map(index => (
            <div key={index} className="circle" />
          ))}
        </div>
      </div>
    );
  }
}

export default Background;
