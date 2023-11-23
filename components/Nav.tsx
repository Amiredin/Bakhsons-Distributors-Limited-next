"use client";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

function Nav() {
  return (
    <div
      className="lg:flex items-center gap-4 hidden cursor-pointer text-sm  text-blue-100 "
      onClick={scrollToTop}
    >
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        activeClass="border-b-2 border-[#A31621]"
        className="hover:border-[#A31621] hover:border-b-2"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about-us"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        activeClass="border-b-2 border-[#A31621]"
        className="hover:border-[#A31621] hover:border-b-2"
      >
        About us
      </ScrollLink>
      <ScrollLink
        to="products"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        activeClass="border-b-2 border-[#A31621]"
        className="hover:border-[#A31621] hover:border-b-2"
      >
        Products
      </ScrollLink>
      <ScrollLink
        to="location"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        activeClass="border-b-2 border-[#A31621]"
        className="hover:border-[#A31621] hover:border-b-2"
      >
        Our Location
      </ScrollLink>
      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        activeClass="border-b-2 border-[#A31621]"
        className="hover:border-[#A31621] hover:border-b-2"
      >
        Contact
      </ScrollLink>
    </div>
  );
}

export default Nav;
