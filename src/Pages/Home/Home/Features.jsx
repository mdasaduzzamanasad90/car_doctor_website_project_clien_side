import FadeReveal from "../../../Animation/FadeReveal";
import Reveal from "../../../Animation/Reveal";
import img1 from "../../../assets/assets/icons/group.svg";
import img2 from "../../../assets/assets/icons/person.svg";
import img3 from "../../../assets/assets/icons/Wrench.svg";
import img4 from "../../../assets/assets/icons/check.svg";
import img5 from "../../../assets/assets/icons/deliveryt.svg";
import { TiTime } from "react-icons/ti";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
const Features = () => {
  return (
    <div className="lg:mx-24">
      {/* title */}
      <FadeReveal>
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold text-[#FF3811]">Core Features</h1>
          <h1 className="text-6xl font-bold">Why Choose Us</h1>
          <p className="text-base font-semibold text-[#00000066]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br />
            words which don't look even slightly believable.
          </p>
        </div>
      </FadeReveal>
      <Reveal>
        <div className="flex justify-between gap-5 mt-20 mb-36">
          {/* 1 */}
          <div className="flip-card2 w-full">
            <div className="flip-card-inner2 border rounded-xl">
              <div className="flip-card-front2 flex flex-col justify-center items-center shadow-lg rounded-xl">
                <img src={img1} alt="" />
                <h1 className="mt-3 font-bold text-xl">Expert Team</h1>
              </div>
              <div className="flip-card-back2 flex flex-col justify-center items-center bg-[#FF3811] shadow-lg rounded-xl text-white">
                <div>
                  <AiOutlineTeam size={70} />
                </div>
                <h1 className="mt-3 font-bold text-xl">Expert Team</h1>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="flip-card2 w-full">
            <div className="flip-card-inner2 border rounded-xl">
              <div className="flip-card-front2 flex flex-col justify-center items-center shadow-lg rounded-xl">
                <div>
                  <TiTime size={70} />
                </div>
                <h1 className="mt-1 font-bold text-xl">Timely Delivery</h1>
              </div>
              <div className="flip-card-back2 flex flex-col justify-center items-center bg-[#FF3811] shadow-lg rounded-xl text-white">
                <div>
                  <TiTime size={70} />
                </div>
                <h1 className="mt-3 font-bold text-xl">Timely Delivery</h1>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="flip-card2 w-full">
            <div className="flip-card-inner2 border rounded-xl">
              <div className="flip-card-front2 flex flex-col justify-center items-center shadow-lg rounded-xl">
                <img src={img2} alt="" />
                <h1 className="mt-3 font-bold text-xl">24/7 Support</h1>
              </div>
              <div className="flip-card-back2 flex flex-col justify-center items-center bg-[#FF3811] shadow-lg rounded-xl text-white">
                <div>
                  <MdOutlineSupportAgent size={70} />
                </div>
                <h1 className="mt-3 font-bold text-xl">24/7 Support</h1>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="flip-card2 w-full">
            <div className="flip-card-inner2 border rounded-xl">
              <div className="flip-card-front2 flex flex-col justify-center items-center shadow-lg rounded-xl">
                <img src={img3} alt="" />
                <h1 className="mt-3 font-bold text-xl">Best Equipment</h1>
              </div>
              <div className="flip-card-back2 flex flex-col justify-center items-center bg-[#FF3811] shadow-lg rounded-xl text-white">
                <div>
                  <GiAutoRepair size={70} />
                </div>
                <h1 className="mt-3 font-bold text-xl">Best Equipment</h1>
              </div>
            </div>
          </div>
          {/* 5 */}
          <div className="flip-card2 w-full">
            <div className="flip-card-inner2 border rounded-xl">
              <div className="flip-card-front2 flex flex-col justify-center items-center shadow-lg rounded-xl">
                <img src={img4} alt="" />
                <h1 className="mt-3 font-bold text-xl">100% Guranty</h1>
              </div>
              <div className="flip-card-back2 flex flex-col justify-center items-center bg-[#FF3811] shadow-lg rounded-xl text-white">
                <div>
                  <MdSecurity size={70} />
                </div>
                <h1 className="mt-3 font-bold text-xl">100% Guranty</h1>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="flip-card2 w-full">
            <div className="flip-card-inner2 border rounded-xl">
              <div className="flip-card-front2 flex flex-col justify-center items-center shadow-lg rounded-xl">
                <img src={img5} alt="" />
                <h1 className="mt-3 font-bold text-xl">Timely Delivery</h1>
              </div>
              <div className="flip-card-back2 flex flex-col justify-center items-center bg-[#FF3811] shadow-lg rounded-xl text-white">
                <div>
                  <TbTruckDelivery size={70} />
                </div>
                <h1 className="mt-3 font-bold text-xl">Timely Delivery</h1>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Features;
