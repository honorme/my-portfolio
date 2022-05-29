import React, { useState } from "react";
import Image from "next/image";
import { SliderImages } from "./sliderImages";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className=" mt-[36px] slider flex items-center ">
      <IoMdArrowDropleft
        className="left-arrow text-[35px] text-white opacity-[.7] hover:opacity-[1] duration-200  "
        onClick={prevSlide}
      />
      {SliderImages.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? "slide-active opacity-100 scale-100"
                : "slide opacity-0 "
            }
            key={index}
          >
            {index === current && (
              <Image
                className="image rounded-[5px]  "
                src={slide.image}
                alt="travel image"
                width={"500%"}
                height={"250%"}
              />
            )}
          </div>
        );
      })}
      <IoMdArrowDropright
        className="left-arrow text-[35px] text-white opacity-[.7] hover:opacity-[1] duration-200  "
        onClick={nextSlide}
      />
    </section>
  );
}
