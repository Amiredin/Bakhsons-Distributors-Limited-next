import Image from "next/image";

function OurBrand() {
  return (
    <><section className=" mb-8" id="our-brands">
    <h1 className="mb-[50px]">Our Brands</h1>
    <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-2">
      <Image
        src="/CopiSafiN.svg"
        alt="Copi safi"
        className="object-contain overflow-hidden"
        width={200}
        height={200}
      />
    </div>
  </section>
  <section className=" mb-8 mt-16" id="our-brands">
      <h1 className="mb-[50px]">Our Partners</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-2">
        <Image
          src="/ulker-logo.svg"
          alt="delamare"
          className="object-contain"
          width={150}
          height={150}
        />
        <Image
          src="/azam.png"
          alt="azam"
          className="object-contain"
          width={150}
          height={150}
        />
        <Image
          src="/ramtos.png"
          alt="ramtos"
          className="object-contain"
          width={150}
          height={150}
        />
        <Image
          src="/gel_logo.svg"
          alt="cel"
          className="object-contain overflow-hidden"
          width={150}
          height={150}
        />
      </div>
    </section>
    </>
  );
}

export default OurBrand;
