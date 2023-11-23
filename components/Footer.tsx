

function Footer() {
  return (
    <section>
      <div className=" bg-[#4E8098] mt-10 h-[280px] p-10">
        <h2 className=" text-center text-4xl text-[#FFFFFF] font-bold mb-4">
          Subscribe to Newsletter
        </h2>
        <p className=" text-center  text-[#FFFFFF] text-[0.8rem] mb-4 font-light ">
          Enter your email address to register to our newsletter subscription!
        </p>
        <form className=" flex flex-col items-center">
          <input
            type="email"
            placeholder="Email Address"
            className=" w-1/2 p-1 rounded-md"
          />
          <button className=" bg-[#A31621] mt-2  text-[#FFFFFF] w-[80px] p-1 rounded-md ">
            Send
          </button>
        </form>
      </div>
      <div className="bg-[#CED3DC] h-[50px] p-5 text-center">
        <p>©UltronSystems</p>
      </div>
    </section>
  );
}

export default Footer;
