import React, { Component } from 'react'
import CarouselContent from "../CarouselContent";

class CarouselItem extends Component {
  render() {
    return (
      <div
        className="carousel-item active"
        style={{
          backgroundImage: 'url("img/intro-carousel/1.jpg")'
        }}
      >
        <div className="carousel-container">
          <CarouselContent />
        </div>
      </div>
    );
  }
}

