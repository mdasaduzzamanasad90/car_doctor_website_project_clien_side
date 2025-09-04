import "./Home.css";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import Services from "./Services";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import FadeReveal from "../../../Animation/FadeReveal";
import Products from "./Products";
import Team from "./Team";
import Features from "./Features";
import Testimonial from "./Testimonial";
import Countepage from "./Countepage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Services></Services>
      <FadeReveal>
        {" "}
        <div className="lg:mx-24 flex justify-between shadow-xl bg-[#FF3811] h-60 mt-20 px-16 rounded-3xl text-white">
          <div className="flex gap-4 items-center">
            <RiCalendarScheduleLine size={40} />
            <div>
              <h1 className="font-semibold text-[#FFFFFFE6] text-lg">
                We are open monday-friday
              </h1>
              <h1 className="font-bold text-2xl">7:00 am - 9:00 pm </h1>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaPhoneVolume size={40} />
            <div>
              <h1 className="font-semibold text-[#FFFFFFE6] text-lg">
                Have a question?
              </h1>
              <h1 className="font-bold text-2xl">+8801920829517</h1>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <ImLocation size={40} />
            <div>
              <h1 className="font-semibold text-[#FFFFFFE6] text-lg">
                Need a repair? Our address
              </h1>
              <h1 className="font-bold text-2xl">Liza Street, New York</h1>
            </div>
          </div>
        </div>
      </FadeReveal>
      <Products></Products>
      <Team></Team>
      <Features></Features>
      <Countepage></Countepage>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
