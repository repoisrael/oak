import React from "react";
import Carousel from "../Carousel";

class Intro extends React.Component {
  render() {
    return (
      <section id="intro">
        <div className="intro-container">
          <Carousel />
        </div>{" "}
        <a
          className="carousel-control-prev"
          href="#introCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon ion-chevron-left"
            aria-hidden="true"
          />
          <span className="sr-only">הבא</span>
        </a>{" "}
        <a
          className="carousel-control-next"
          href="#introCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon ion-chevron-right"
            aria-hidden="true"
          />
          <span className="sr-only">הקודם</span>
        </a>
      </section>
    );
  }
}

export default Intro;
