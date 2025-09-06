import { useEffect, useState } from "react";
import ServiceItem from "../Home/Home/ServiceItem";

const ServicePage = () => {
  const [services, setservices] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setloading(true);
    fetch("https://car-doctor-server-ue3r.onrender.com/services")
      .then((res) => res.json())
      .then((data) => {
        setservices(data);
        setloading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-xl text-[#FF3811]"></span>
      </div>
    );
  }
  return (
    <div className="lg:mx-24 mt-36 mb-28">
      {/* service item */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 my-20 w-full">
        {services.map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
