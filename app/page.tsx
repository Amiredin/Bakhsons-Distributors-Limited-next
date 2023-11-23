import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurBrand from "@/components/OurBrand";
import OurLocation from "@/components/OurLocation";
import OurProducts from "@/components/OurProducts";
import OurTeam from "@/components/OurTeam";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/TrustedBy";
import VissionMissionValue from "@/components/VissionMissionValue";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <VissionMissionValue/>
      <OurBrand />
      <OurProducts />
      <TrustedBy/>
      <OurTeam/>
      <Testimonials/>
      <OurLocation/>
      <Contacts/>
      <Footer/>
  
    </>
  );
}
