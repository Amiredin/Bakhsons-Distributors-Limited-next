import delamare from "../assets/delamare.png";
import azam from "../assets/azam.png";
import cocacola from "../assets/cocacola.png";
import ramtos from "../assets/ramtos.png";
import cel from "../assets/cel.png";
import Image from "next/image";

function OurBrand() {
  return (
    <section className=" mb-8" id="our-brands">
      <h1>Our Brands</h1>
      <div className="flex items-center justify-center lg:gap-10 gap-4">
        <Image
          src="/delamare.png"
          alt="delamare"
          className="h-[50px] w-50px object-contain lg:h-[150px] lg:w-[120px]"
          width={120}
          height={120}
        />
        <Image
          src="/azam.png"
          alt="azam"
          className="h-[50px] w-50px object-contain lg:h-[150px] lg:w-[120px]"
          width={120}
          height={120}
        />
        <Image
          src="/cocacola.png"
          alt="cocacola"
          className="h-[50px] w-50px object-contain lg:h-[150px] lg:w-[120px]"
          width={120}
          height={120}
        />
        <Image
          src="/ramtos.png"
          alt="ramtos"
          className="h-[50px] w-50px object-contain"
          width={120}
          height={120}
        />
        <Image
          src="/cel.png"
          alt="cel"
          className="h-[50px] w-50px object-contain lg:h-[150px] lg:w-[120px]"
          width={120}
          height={120}
        />
      </div>
    </section>
  );
}

export default OurBrand;
