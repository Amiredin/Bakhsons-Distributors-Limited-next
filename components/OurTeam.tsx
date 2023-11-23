import Image from "next/image";
import ourTeam from "../assets/OurTeam.png";

function OurTeam() {
  return (
    <section className=" mt-5">
      <h1>Our Team</h1>
      <div className=" lg:flex gap-10 p-10 justify-center">
        <p className="text-[#68A4D0] lg:w-1/2 text-center lg:text-[1rem] text-[0.7rem] lg:p-10 lg:mt-10 mb-4 ">
          At Bakhsons Distributors, our expert distribution team stands out for
          their brilliance and unwavering work ethic. Committed to delivering
          top-notch services, they possess extensive knowledge in the
          distribution industry. With meticulous attention to detail and
          innovative thinking, our team ensures the seamless flow of products to
          our customers. Their professionalism, dedication, and collaborative
          spirit make them the perfect choice for distributors seeking
          exceptional services that go above and beyond. Experience the
          excellence of our distribution team and elevate your business to new
          heights.
        </p>

        <div className=" lg:w-1/2">
          <Image
            src="/OurTeam.png"
            alt="Our Team"
            className="lg:h-[350px] lg:w-[350px] h-[300px] w-[500px] object-contain"
            height={350}
            width={350}
          />
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
