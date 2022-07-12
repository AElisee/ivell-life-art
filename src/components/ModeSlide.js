import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ModeSlide = () => {
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
          <div className="mod-i-1 hover"> </div>
          <div className="mod-i-2 hover"> </div>
          <div className="mod-i-3 hover"> </div>
          <div className="mod-i-4 hover"> </div>
          <div className="mod-i-5 hover"> </div>
        </div>
        <div className="slide-2 carousel-grid">
          <div className="mod-i-1 hover"> </div>
          <div className="mod-i-2 hover"> </div>
          <div className="mod-i-3 hover"> </div>
          <div className="mod-i-4 hover"> </div>
          <div className="mod-i-5 hover"> </div>
        </div>
        {/* <div className="slide-3">
           
        </div>
         */}
      </Carousel>
    </div>
  );
};

export default ModeSlide;
