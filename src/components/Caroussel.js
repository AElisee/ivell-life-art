import React from "react";
import { Carousel } from "react-bootstrap";
import recent01 from "../assets/img/recent01.png";
import recent02 from "../assets/img/recent02.png";
import recent03 from "../assets/img/recent03.png";
const Caroussel = () => {
  return (
    <div className="carousel">
      <Carousel className="carousel-slide">
        <Carousel.Item>
          <img className="d-block w-100" src={recent01} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={recent02} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={recent03} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caroussel;
