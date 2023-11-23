"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  beverageCarouselData,
  confectioneryCarouselData,
  electronicCarouselData,
} from "../data";
import { BeverageType, ConfectioneryType, ElectronicsType } from "@/types";

export default function OurProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    // Apply blur to the old index
    setCurrentSlide(oldIndex);
  };

  const handleAfterChange = (index: number) => {
    // Remove blur from the current index
    setCurrentSlide(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    // beforeChange: (oldIndex: any, newIndex: any) => setCurrentSlide(newIndex),
    // afterChange: (currentIndex: any) => setCurrentSlide(currentIndex),
  };

  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true, // Set to true for reverse direction
    arrows: false,
  };

  return (
    <section className="" id="products">
      <h1>Our Products</h1>

      {/* Beverages */}
      <div className="lg:flex gap-5 lg:mt-10 lg:h-[300px]">
        <div className="lg:w-1/2 p-10">
          <h2 className="text-[#4E8098] font-bold text-center mb-5 text-2xl">
            Beverages
          </h2>
          <p className="lg:text-center text-[#68A4D0] text-[0.7rem] lg:text-[0.9rem]">
            We supply only the highest quality beverages, sourced from trusted
            producers and rigorously checked for taste, freshness, and
            authenticity. Your satisfaction is our priority, and we strive to
            deliver delightful and satisfying beverage options that exceed your
            expectations.
          </p>
        </div>
        <Slider {...settings} className="bg-[#CED3DC] lg:w-[60%] relative">
          {beverageCarouselData.map(({ image, title }, index) => (
            <>
         
              <div
                key={title}
                className={`!flex flex-col items-center justify-center `}
              >
                <Image
                  src={image}
                  alt={`Image ${title}`}
                  className="w-[105px] h-full p-5 object-cover"
                />
                <p>{title}</p>
              </div>
            </>
          ))}
        </Slider>
      </div>

      {/* Electronics */}
      <div className="lg:flex gap-5 flex-row-reverse lg:h-[300px]">
        <div className="lg:w-1/2 p-10">
          <h2 className="text-[#4E8098] font-bold text-center mb-5 text-2xl">
            Electronics
          </h2>
          <p className="text-center text-[#68A4D0] text-[0.7rem] lg:text-[0.9rem]">
            We supply top-quality home appliances from trusted brands, ensuring
            reliability, performance, and customer satisfaction.
          </p>
        </div>
        <Slider
          {...settings2}
          className="bg-[#4E8098] p-5 lg:w-[60%]"
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
        >
          {electronicCarouselData.map(
            ({ image, title }: ElectronicsType, index) => (
              <div
                key={title}
                className={`!flex flex-col items-center justify-center`}
              >
                <Image
                  src={image}
                  alt={`Image ${title}`}
                  className="w-[175px] h-full p-5 object-cove"
                />
                <p>{title}</p>
              </div>
            )
          )}
        </Slider>
      </div>

      {/* Confectionery */}
      <div className="lg:flex gap-5 lg:h-[300px]">
        <div className="lg:w-1/2 p-10">
          <h2 className="text-[#4E8098] font-bold text-center mb-5 text-2xl">
            Confectionery
          </h2>
          <p className="text-center text-[#68A4D0] text-[0.7rem] lg:text-[0.9rem]">
            We take pride in the quality of our confectionery. Our selection is
            made from the finest ingredients, ensuring exceptional taste and
            freshness. Every treat undergoes rigorous quality checks,
            guaranteeing a delightful experience with every bite.
          </p>
        </div>
        <Slider
          {...settings}
          className="bg-[#CED3DC] pb-0 pt-7 lg:w-[60%] mt0 flex align-baseline"
          beforeChange={handleBeforeChange}
          afterChange={handleAfterChange}
        >
          {confectioneryCarouselData.map(
            ({ image, title }: ConfectioneryType, index) => (
              <div
                key={title}
                className={`!flex flex-col items-center justify-center`}
              >
                <Image
                  src={image}
                  alt={`Image ${title}`}
                  className="w-[375px] h-[250x] p-5 object-cover align-baseline"
                />
                <p>{title}</p>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
}
