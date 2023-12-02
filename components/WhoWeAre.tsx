"use client"
import Image from "next/image";
import whoweare from "../assets/whoweare.png";
import Lottie from "lottie-react";
import QuestionMark from "../public/NewQuestionMark.json"

function WhoWeAre() {
  return (
    <section
      id="about-us"
      className=" lg:h-[950px] w-full flex flex-col justify-center items-center lg:p-16 mb-28 "
    >
      <Lottie animationData={QuestionMark} className="h-[300px] w-full mt-[100px] mb-[30px] self-center "></Lottie>
      <h1>Who we are</h1>
      <div className="mt-10 md:flex lg:flex lg:flex-row-reverse items-center justify-center gap-[20px]  lg:p-10 p-5">
        <p className=" text-center lg:text-[1rem] text-[0.7rem] mb-8 lg:w-[50%] ">
        Bakhsons Distributors Limited was established on 3rd October, 2007 in Kenya under the company’s Act Cap 486. It is a privately owned international trading and distribution company. Our management has many years experience in the fields of importing and distributing. The basic function of the company is to source, market and distribute foodstuffs and beverages from both the domestic and overseas markets.

The company has grown rapidly since then and now employs over 50 people with warehouse and office space in the main economic centres of Mombasa, Nairobi with the head office situated in Nairobi.

In Kenya, we are well established with a highly professional sales, marketing, warehousing and distribution operation. Consequently we are able to deal with all the major supermarkets and independent retail operators. We are continuously sourcing products, which we feel have the potential to impact on the Kenyan market. We have all the necessary experience, knowledge and capital to ensure the success of our suppliers.


        </p>
        <Image
          src="/whoweare.png"
          alt="whoweare"
          className="lg:m-auto object-contain"
          width={330}
          height={330}
        />
      </div>
    </section>
  );
}

export default WhoWeAre;
