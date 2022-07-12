import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeSlide = () => {
  return (
    <div className="slide-container">
      <Carousel
        showIndicators={false}
        showThumbs={false}
        autoPlay
        interval={5000}
        infiniteLoop={true}
        showStatus={false}
      >
        <div className="slide-1 carousel-grid">
          <div className="hsi-1 hover">image1</div>
          <div className="hsi-2 hover">image2</div>
          <div className="hsi-3 hover">image3</div>
          <div className="hsi-4 hover">image4</div>
          <div className="hsi-5 hover">image5</div>
        </div>
        <div className="slide-2 carousel-grid">
          <div className="hsi-1 hover">image1</div>
          <div className="hsi-2 hover">image2</div>
          <div className="hsi-3 hover">image3</div>
          <div className="hsi-4 hover">image4</div>
          <div className="hsi-5 hover">image5</div>
        </div>
        {/* <div className="slide-3">
           
        </div>
         */}
      </Carousel>
    </div>
  );
};

export default HomeSlide;
