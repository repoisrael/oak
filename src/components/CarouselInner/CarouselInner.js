import React, { Component } from 'react'
import CarouselItem from "../CarouselItem";

class CarouselInner extends React.Component {
  render() {
    return (
      <div className="carousel-inner" role="listbox">
        <CarouselItem />
        <div
          className="carousel-item"
          style={{
            backgroundImage: 'url("img/intro-carousel/2.jpg")'
          }}
        >
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>לא צריך הון לבנות אתר</h2>
              <p>
                צוות המפתחים שלנו ישמחו לעבור איתך כדי להגיע לעיצוב המקסימל
              </p>{" "}
              <a href="#featured-services" className="btn-get-started scrollto">
                מחירון
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: 'url("img/intro-carousel/3.jpg")'
          }}
        >
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>קצת ביקורות שלנו</h2>
              <p>בין לקוחותינו המרוצים הם .</p>{" "}
              <a href="#featured-services" className="btn-get-started scrollto">
                לפרטים נוספים
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{
            backgroundImage: 'url("img/intro-carousel/4.jpg")'
          }}
        >
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>לא צריך הון לבנות אתר</h2>
              <p>
                צוות המפתחים שלנו ישמחו לעבור איתך כדי להגיע לעיצוב המקסימל
              </p>{" "}
              <a href="#featured-services" className="btn-get-started scrollto">
                מחירון
              </a>{" "}
            </div>{" "}
            <a href="#featured-services" className="btn-get-started scrollto">
              Get Started
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselInner;
