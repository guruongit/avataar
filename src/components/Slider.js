// Dependencies, Libraries and Components
import { useEffect, useState } from "react";
import React from "react";
import { slides } from "./SliderData";
import { LuDot } from "react-icons/lu";
import { TiMinus, TiArrowLeft, TiArrowRight } from "react-icons/ti";

// constant Declerations
const length = slides.length;

// component function for slider

const Slider = () => {
  // Hooks for the carousel slider rotation logic and active slide state
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const rotateNext = () => {
      setCurrent((prevIndex) => (prevIndex + 1) % length);
    };
    const interval = setInterval(rotateNext, 5600);
    return () => clearInterval(interval);
  }, []);

  // Checking for Slides
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  // Carousel Logic and active slides on view port out of total slides
  let carouselImages;
  const startIdx = (current - 2 + length) % length;
  const endIdx = (current + 2) % length;
  if (startIdx > endIdx) {
    // When startIdx is greater than endIdx this means that half of the slides are on left and half on right
    carouselImages = slides.slice(startIdx, length);
    carouselImages = carouselImages.concat(slides.slice(0, endIdx + 1));
  } else {
    // When startIdx is less than endIdx this means that all the slides are in between
    carouselImages = slides.slice(startIdx, endIdx + 1);
  }

  // Functions for NextSlide, PrevSlide and KeyPress

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selectSlide = (index) => {
    setCurrent(index + current - 2);
  };

  const handle = (e) => {
    console.log(e);
  };

  // Return JSX Code to be rendered in the App Component

  return (
    // Slider Container
    <section className="slider" style={{}}>
      {/* Heading Container */}
      <div className="Heading-container" onKeyUp={handle}>
        <h1 style={{ fontSize: "40px" }}>Featured Products</h1>
        <h5>Explore and discover a variety of products</h5>
      </div>

      {/* Carousel Container */}
      <div className="carousel-container">
        {carouselImages.map((carouselImage, index) => {
          return (
            <div key={index} className="slider-div">
              <img
                key={index}
                src={carouselImage.image}
                className={`image-${index} image `}
                onClick={selectSlide.bind(null, index)}
              />
            </div>
          );
        })}
      </div>

      {/* Arrows and Dots Navigation Container */}
      <div className="arrows-container">
        <TiArrowLeft className="left-arrow" onClick={prevSlide} />
        {/* Dots Navigation */}
        {slides.map((_, index) => {
          return (
            <button
              key={index}
              className="slider-dot-btn"
              onClick={selectSlide.bind(null, index - current + 2)}
            >
              {/* Dash for Highligted Slide and Dot for other slides */}
              {index === current ? (
                <TiMinus className="slider-dash-btn" />
              ) : (
                <LuDot />
              )}
            </button>
          );
        })}
        <TiArrowRight className="right-arrow" onClick={nextSlide} />
      </div>
    </section>
  );
};

export default Slider;
