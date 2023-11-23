import testimonials from "../public/testimonials.jpg";
import { ImQuotesLeft } from "react-icons/im";

function Testimonials() {
  return (
    <section
      className={` mt-5 bg-cover bg-no-repeat lg:h-[500px] bg-center p-5 bg-[url('/testimonials.jpg')]`}
    >
      <h1>Testimonials</h1>
      <p className=" text-[#4E8098] text-center">
        What our clients say about us
      </p>
      <div className="  lg:flex lg:gap-5 lg:p-5 gap-2 mt-5">
        <div className="bg-[#FCF7F8] flex flex-col items-center flex-1  rounded-lg text-[0.7rem] lg:text-[1rem] p-3 m-2">
          <ImQuotesLeft className=" text-[#A31621] text-4xl  mt-5 text-center" />
          <p className=" text-center font-bold">
            Outstanding service and products! This distribution company exceeded
            my expectations. Their team was helpful and responsive, ensuring a
            seamless experience!
          </p>
          <div className="flex flex-col  text-[#4E8098] p-3">
            <p className=" text-center text-[#4E8098] mt-5 mb-1">Faraj Said</p>
            <p className=" font-bold text-[#4E8098] text-center">
              CEP BulkMart Traders
            </p>
          </div>
        </div>
        <div className="bg-[#FCF7F8] flex flex-col items-center flex-1 rounded-lg text-[0.7rem] lg:text-[1rem]  p-3 m-2">
          <ImQuotesLeft className=" text-[#A31621] text-4xl mt-5 text-center" />
          <p className=" text-center font-bold">
            Exceptional experience from start to finish. Reliable, efficient,
            and top-notch service! Impressed by their professionalism, quality
            products, and excellent customer support. Highly recommended!
          </p>
          <div className="flex flex-col  text-[#4E8098] p-3">
            <p className=" text-center text-[#4E8098] mt-5 mb-1">Peter Juma</p>
            <p className=" font-bold text-[#4E8098] text-center">
              Director, PrimeBuy Wholesale
            </p>
          </div>
        </div>
        <div className="bg-[#FCF7F8] flex flex-col items-center justify-center flex-1 rounded-lg text-[0.7rem] lg:text-[1rem]  p-3 m-2">
          <ImQuotesLeft className=" text-[#A31621] text-4xl mt-5 text-center" />
          <p className=" text-center font-bold">
            Impeccable service, superior products. This distribution company
            sets the standard for excellence. Highly recommended for all your
            needs!
          </p>

          <div className="flex flex-col  text-[#4E8098] p-3">
            <p className=" text-center  mt-5 mb-1">Ali Hassan</p>
            <p className=" font-bold ">CEO, TradeMax</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Testimonials;
