import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

const Carousel = ({ data }) => {

  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    return setSlide(slide >= data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    return setSlide(slide <= 0 ? data.length - 1 : slide - 1)
  }

  //   console.log(data);
  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        size={24}
        // color="blue"
        className="arrow arrow__left"
        onClick={prevSlide}
      />
      {data.map((item, idx) => {
        return (
          <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide__hidden"} />
        );
      })}
      <BsArrowRightCircleFill
        size={24}
        // color="red"
        className="arrow arrow__right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator__inactive"}></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
