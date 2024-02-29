import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "../src/pics/slide1.png";
import slide22 from "../src/pics/slide2.png";
import slide3 from "../src/pics/neophone.png";
import "./css/login.css"
const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 1800,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={slide1} alt="Slide 1"  style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div>
        <img src={slide22} alt="Slide 2"  style={{ maxWidth: '100%', height: 'auto' }}  />
      </div>
      <div>
        <img src={slide3} alt="Slide 2"  style={{ maxWidth: '100%', height: 'auto' }}  />
      </div>
    </Slider>
  );
};

export default HeroCarousel;
