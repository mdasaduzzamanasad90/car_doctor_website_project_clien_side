import { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";
import { useNavigate } from "react-router-dom";
import FadeReveal from "../../../Animation/FadeReveal";

const Services = () => {
  const [services, setservices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://car-doctor-server-ue3r.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div className="lg:mx-24">
      {/* service title */}
      <FadeReveal>
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold text-[#FF3811]">Service</h1>
          <h1 className="text-6xl font-bold">Our Service Area</h1>
          <p className="text-base font-semibold text-[#00000066]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br />
            words which don't look even slightly believable.
          </p>
        </div>
      </FadeReveal>
      {/* service item */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 my-20 h-[800px] w-full">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
      {/* more services button */}
      <FadeReveal>
        <div className="text-center">
          <button
            onClick={() => navigate("/allservice")}
            className="btn mt-8 text-lg font-bold hover:text-white hover:bg-[#FF3811] w-40 hover:border-none border-[#FF3811] bg-white text-[#FF3811]"
          >
            More Services
          </button>
        </div>
      </FadeReveal>
    </div>
  );
};

export default Services;
