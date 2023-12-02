"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { heroCarouselData } from "../data";

import { CarouselType } from "@/types";
import Image from "next/image";

function Header() {
  return (
    <header className="relative mb-10 h-[80]  bg-[#4E8098]" id="home">
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        dynamicHeight={true}
        // showIndicators={false}
        // className="h-[100px] "
      >
        {heroCarouselData.map(
          ({ title, image, btnText, desc }: CarouselType) => (
            <div key={title}>
              <Image
                src={image}
                alt=""
                className="object-cover w-full lg:h-[100%] h-[200px]"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition duration-300"></div>
              <div className="absolute top-[100px] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="lg:text-3xl text-[0.8rem] font-bold mb-3">{title}</h2>
                <p className="hidden lg:block lg:text-[1rem] text-[0.7rem]">
                  {desc}
                </p>
                <button className="bg-[#A31621] text-white px-2 text-[0.6rem] lg:text-[1rem] py-1 lg:p-2 lg:mt-4 rounded -mt-14 mb-4">
                  {btnText}
                </button>
              </div>
            </div>
          )
        )}
      </Carousel>
    </header>
  );
}

export default Header;
