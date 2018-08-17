import React, { Component } from "react";
import About from "./About";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="Carousel">LANDING COMPONENT - CAROUSEL GOES HERE</div>
        <About />
      </div>
    );
  }
}

export default Landing;
