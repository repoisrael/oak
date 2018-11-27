import React, { Component } from 'react'
import CarouselInner from "../CarouselInner";

class Carousel extends Component {
  render() {
    return (
      <div
        id="introCarousel"
        className="carousel  slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators" />
        <CarouselInner />
        <div
          className="carousel-item"
          style={{
            backgroundImage: 'url("img/intro-carousel/5.jpg")'
          }}
        >
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>קצת ביקורות שלנו</h2>
              <p>בין לקוחותינו המרוצים הם .</p>{" "}
              <a href="#featured-services" className="btn-get-started scrollto">
                Get Started
              </a>{" "}
            </div>{" "}
            <a href="#featured-services" className="btn-get-started scrollto">
              צור קשר
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

 