import React from "react";
import { Carousel } from "react-bootstrap";
import hero1 from "./../../assets/logo/FIX1.png";
import hero2 from "./../../assets/logo/FIX2.png";
import hero3 from "./../../assets/logo/holiday.png";

const Hero = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={hero1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hero2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hero3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
