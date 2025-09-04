import CountUp from "react-countup";
import FadeReveal from "../../../Animation/FadeReveal";
import Reveal from "../../../Animation/Reveal";
import { IoCarSport } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { RiShoppingCartFill } from "react-icons/ri";


const Countepage = () => {
  return (
    <div className="mx-24">
      <FadeReveal>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-4">
            Our Achievements <span className="text-[#FF3811]">&</span> Services
          </h1>
          <p className="text-base font-semibold text-[#00000066] text-center mb-16">
            We have served thousands of cars with top-quality services and
            products, <br />
            trusted by satisfied customers across the country.
          </p>
        </div>
      </FadeReveal>
      <div className="flex justify-between">
        {/*01 Satisfied Customers  */}
        <Reveal>
          {" "}
          <div className="text-4xl font-bold text-center shadow-xl py-5 px-7 rounded-xl">
            <div className="flex justify-center gap-3 mb-2 text-[#FF3811] w-52">
              <IoPersonAdd />
              <CountUp
                start={0}
                end={3000}
                duration={5}
                suffix={"+"}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </div>
            <h1 className="text-xl font-semibold text-[#00000066]">
              Satisfied Customers
            </h1>
          </div>
        </Reveal>
        {/*02 Cars Serviced */}
        <Reveal>
          {" "}
          <div className="text-4xl font-bold text-center shadow-xl py-5 px-7 rounded-xl">
            <div className="flex justify-center gap-3 mb-2 text-[#FF3811] w-52">
              <IoCarSport />
              <CountUp
                start={0}
                end={5000}
                duration={5}
                suffix={"+"}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </div>
            <h1 className="text-xl font-semibold text-[#00000066]">
              Cars Serviced
            </h1>
          </div>
        </Reveal>
        {/*03 Services Offered  */}
        <Reveal>
          {" "}
          <div className="text-4xl font-bold text-center shadow-xl py-5 px-7 rounded-xl">
            <div className="flex justify-center gap-3 mb-2 text-[#FF3811] w-52">
              <FaTools />
              <CountUp
                start={0}
                end={20}
                duration={5}
                suffix={"+"}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </div>
            <h1 className="text-xl font-semibold text-[#00000066]">
              Services Offered
            </h1>
          </div>
        </Reveal>
        {/*04 Products Sold  */}
        <Reveal>
          {" "}
          <div className="text-4xl font-bold text-center shadow-xl py-5 px-7 rounded-xl">
            <div className="flex justify-center gap-3 mb-2 text-[#FF3811] w-52">
             <RiShoppingCartFill />
              <CountUp
                start={0}
                end={1000}
                duration={5}
                suffix={"+"}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </div>
            <h1 className="text-xl font-semibold text-[#00000066]">
              Products Sold
            </h1>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Countepage;
