import React, { Component } from "react";
import About from "./About";
import Arrow from "./Arrow";
import Imageslide from "./Imageslide";
import Sf from "./carouselImages/sf.jpg";
import Tokyo from "./carouselImages/tokyo.jpg";
import London from "./carouselImages/london.jpg";
import Paris from "./carouselImages/paris.jpg";

const imgUrls = [London, Tokyo, Sf, Paris];

class Landing extends Component {
  state = {
    currentImageIndex: 0
  };

  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({ currentImageIndex: index });
  };

  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({ currentImageIndex: index });
  };

  // carouselImg = () => {
  //   document;
  //   let imagecontainer = document.getElementById("carousel-container");
  //   imagecontainer.setAttribute("backgroundImage", this.styles.backgroundImage);
  // };

  render() {
    return (
      <div>
        <div className="carousel">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;"
          />
          <Imageslide
            carouselImg={this.carouselImg}
            url={imgUrls[this.state.currentImageIndex]}
          />
          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;"
          />
        </div>
        <About />
      </div>
    );
  }
}

export default Landing;
