"use client"
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Contacts() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const messagePrompts = [
    "Hey! I'm a new customer looking to explore your catalog. Any recommendations on your top-selling products?",
    "Greetings! I'm curious about the shipping options you provide. Can you give me an overview of the delivery methods and their estimated timeframes?",
    "Hello there! I'd love to know if you offer any discounts or promotions for bulk orders. Can you provide me with more details?",
    "Hi! I have a technical question about one of your products. Is there a dedicated support team I can reach out to for assistance?",
    "Hi there! I'm interested in learning more about your distribution services. Can you tell me about the range of products you offer?",
  ];

  const handleClick = (clickedMessage: string) => {
    setMessage(clickedMessage || "");
  };

  const ContactInfo = ({ title, icon, text, color }: any) => {
    return (
      <div className={`border-[#4E8098] border-2 rounded-md`}>
        <h2 className={`bg-[#4E8098] text-[white] font-bold text-center`}>
          {title}
        </h2>
        <div
          className={`flex flex-col items-center flex-wrap p-2 text-[0.5rem] w-[100px]`}
        >
          {icon({ className: `text-[1.5rem] ${color}` })}
          <p>{text}</p>
        </div>
      </div>
    );
  };

  return (
    <section className=" lg:mt-8 mt-4" id="contact">
      <div className=" w-1/2 my-5 mx-auto">
        <h1>Contact Bakhsons</h1>
        <p className=" text-[#68A4D0] text-center font-medium lg:text-[1rem] text-[0.7rem]">
          We’re here to help and answer any question you might have. We look
          forward to hearing from you
        </p>
      </div>

      <div className=" flex justify-center gap-10 mt-10 w-full ">
        <form action="" className=" w-1/2">
          <div className=" text-[#4E8098] lg:flex gap-5 flex-2">
            <div className=" flex flex-col">
              <label htmlFor="emali" className=" font-bold">
                Email
              </label>
              <input
                type="text"
                placeholder="myemail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="  px-10 py-1 border-2 border-[ligthgray] rounded-md w-full bg-transparent text-sm"
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="emali" className=" font-bold">
                Phone
              </label>
              <input
                type="text"
                placeholder="+254712345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="  px-10 py-1 border-2 border-[ligthgray] rounded-md w-full bg-transparent text-sm"
              />
            </div>
          </div>
          <div className=" flex flex-col mt-5 text-[#4E8098]">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="  px-10 py-1 border-2 border-[ligthgray] rounded-md w-full bg-transparent text-sm"
            />
          </div>
          <button className=" bg-[#A31621] w-full text-[#FCF7F8] p-1 rounded-md mt-4">
            Submit
          </button>
        </form>
        <div className=" w-1/4 cursor-pointer">
          <h2 className=" text-[#4E8098] font-semibold">Message Prompts</h2>
          {messagePrompts.map((prompt, index) => (
            <p
              key={index}
              className="border-2 text-[#000000] font-normal rounded-md text-center my-2 text-[0.4rem] lg:text-[0.7rem] p-1 lg:p-0"
              onClick={() => handleClick(prompt)}
            >
              {prompt}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <ContactInfo
          title="Email"
          icon={MdOutlineMailOutline}
          text="sales@bakhressa.co.ke"
        />
        <ContactInfo title="Call" icon={FaPhoneAlt} text="+254721333666" />
        <ContactInfo
          title="Text"
          icon={RiWhatsappFill}
          text="+254721333666"
          color="text-[green]"
        />
        <ContactInfo
          title="Like"
          icon={FaFacebook}
          text="Bakhsons Products"
          color="text-[#1877F2]"
        />
        <ContactInfo
          title="Follow"
          icon={FaTiktok}
          text="bakhsons"
          color="text-[#1877F2]"
        />
        <ContactInfo
          title="Follow"
          icon={FaInstagram}
          text="bakhsonsdistributors"
          color="text-[#1877F2]"
        />
        
      </div>
    </section>
  );
}

export default Contacts;
