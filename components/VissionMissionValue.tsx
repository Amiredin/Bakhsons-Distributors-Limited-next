"use client"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Image from "next/image";
import Lottie from "lottie-react";
import vission from '../public/vission.json'
import mission from '../public/mission.json'
import values from '../public/values.json'


function VissionMissionValue() {
  return (
    <section className="relative mb-24">
      <div className=" bg-[#4E8098] lg:h-[150px] h-[250px]  -skew-y-[2deg] shadow-lg"></div>
      <div className=" bg-[#CED3DC] lg:h-[150px] h-[250px] -skew-y-[2deg]"></div>
      <div className=" absolute lg:top-40   top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-around  lg:p-10 lg:gap-12 gap-2 ">
        <div className=" bg-[#fcf7f8] rounded-full lg:h-72 lg:w-72  h-40 w-40 text-center p-6 flex flex-col items-center justify-center mb-2 border-2 lg:border-[#4E8098] shadow-lg">
          {/* <VisibilityOutlinedIcon
            className=" !lg:h-20 lg:w-20 underline"
            style={{ height: "50px", width: "100px", color: "#A31621" }}
          /> */}
          {/* <Image src='/eye.png' alt="Vision" width={20} height={20}/> */}
          <Lottie animationData={vission} className="lg:h-[60px] lg:w-[60px] h-[30px] w-[30px]"></Lottie>
          <u></u>
          <h2 className=" lg:mt-3 lg:mb-2 lg:text-lg text-sm text-[#4E8098] font-bold leading-relaxed">
            Vision
          </h2>
          <p className="text-[#68A4D0] text-[0.6rem] lg:text-[1rem]">
          To be the leading importer of food stuff and be the best distributors of locally manufactured product.
          </p>
        </div>
        <div className=" bg-[#fcf7f8] rounded-full lg:h-72 lg:w-72  h-40 w-40 text-center p-6 flex flex-col items-center justify-center mb-2 border-2 lg:border-[#4E8098] shadow-lg">
          {/* <CheckCircleOutlineIcon
            style={{ height: "50px", width: "100px", color: "#A31621" }}
          /> */}
           <Lottie animationData={mission} className="lg:h-[60px] lg:w-[60px] h-[30px] w-[30px]"></Lottie>
          <h2 className=" lg:mt-3 lg:mb-2 lg:text-lg text-sm text-[#4E8098] font-bold leading-relaxed">
            Mission
          </h2>
          <p className="text-[#68A4D0] text-[0.6rem] lg:text-[1rem]">
          Bakhsons Distributors Ltd aims to lead in the food and beverage industry with reliable, productive, and profitable services.
          </p>
        </div>
        <div className=" bg-[#fcf7f8] rounded-full lg:h-72 lg:w-72  h-40 w-40 text-center p-6 flex flex-col items-center justify-center mb-2 border-2 lg:border-[#4E8098] shadow-lg">
          {/* <AssignmentTurnedInIcon
            style={{ height: "50px", width: "100px", color: "#A31621" }}
          /> */}
           <Lottie animationData={values} className="lg:h-[60px] lg:w-[60px] h-[30px] w-[30px]"></Lottie>
          <h2 className=" lg:mt-3 lg:mb-2 lg:text-lg text-sm text-[#4E8098] font-bold leading-relaxed">
            Values
          </h2>
          <p className="text-[#68A4D0] text-[0.6rem] lg:text-[1rem]">
            Excellence through integrity, innovation, and partnerships, making a
            positive impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VissionMissionValue;
