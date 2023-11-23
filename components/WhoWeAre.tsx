import Image from "next/image";
import whoweare from "../assets/whoweare.png";

function WhoWeAre() {
  return (
    <section
      id="about-us"
      className="  lg:h-[650px] lg:w-full lg:flex lg:flex-col justify-center items-center lg:p-16 mb-28"
    >
      <h1>Who we are</h1>
      <div className="mt-10 md:flex lg:flex lg:flex-row-reverse items-center justify-between  lg:p-10 p-5">
        <p className=" lg:text-center lg:text-[1rem] text-[0.7rem] mb-8">
          Bakhsons Distributors Ltd is a prominent food and beverage
          distribution company that was established in 2005 in Nairobi, Kenya.
          Since its inception, the company has experienced significant growth
          and has emerged as one of the leading distributors of high-quality
          food and beverage products throughout Kenya. With its headquarters
          situated in Nairobi, Bakhsons Distributors operates an extensive
          network of distribution centers across the country, enabling efficient
          and widespread delivery of their products. The company's commitment to
          providing quality products has contributed to its success and
          reputation in the Kenyan market.
        </p>
        <Image
          src="/whoweare.png"
          alt="whoweare"
          className="lg:mr-16 object-contain"
          width={330}
          height={330}
        />
      </div>
    </section>
  );
}

export default WhoWeAre;
