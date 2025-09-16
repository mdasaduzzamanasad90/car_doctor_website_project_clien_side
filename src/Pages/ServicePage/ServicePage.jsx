import { useEffect, useState } from "react";
import ServiceItem from "../Home/Home/ServiceItem";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const ServicePage = () => {
  const { count } = useLoaderData();
  // console.log(count);
  const [currenpage, setcurrenpage] = useState(0);
  const [itemsperpage, setitemsperpage] = useState(10);

  const numberofpages = Math.ceil(count / itemsperpage);
  // console.log(numberofpages);
  const pages = [...Array(numberofpages).keys()];
  // console.log(pages);

  const handleitemsperpage = (event) => {
    const val = parseInt(event.target.value);
    setitemsperpage(val);
    setcurrenpage(0);
  };

  const handleprevbutton = () => {
    if (currenpage > 0) {
      setcurrenpage(currenpage - 1);
    }
  };

  const handlenextbutton = () => {
    if (currenpage < pages.length - 1) {
      setcurrenpage(currenpage + 1);
    }
  };

  const [services, setservices] = useState([]);
  const [loading, setloading] = useState(true);
  // https://car-doctor-server-project.web.app/services

  useEffect(() => {
    setloading(true);
    axios
      .get(
        `https://car-doctor-server-project.web.app/services?page=${currenpage}&limit=${itemsperpage}`,
        { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data)
        setservices(res.data);
        setloading(false);
      });
    // fetch("https://car-doctor-server-project.web.app/services")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setservices(data);
    //     setloading(false);
    //   });
  }, [currenpage, itemsperpage]);
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
      {services.length === 0 ? (
        <p className="text-center text-5xl text-gray-500">No services found.</p>
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 my-20 w-full">
          {services.map((service) => (
            <ServiceItem key={service._id} service={service}></ServiceItem>
          ))}
        </div>
      )}
      {/* pegination */}
      <div className="flex justify-center gap-5">
        <button
          className="btn hover:bg-[#FF3811] hover:text-white hover:border-none w-20 "
          onClick={handleprevbutton}
          disabled={currenpage === 0}
        >
          prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setcurrenpage(page)}
            key={page}
            className={`btn ${
              currenpage === page ? "bg-[#FF3811] text-white border-none" : ""
            }`}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="btn hover:bg-[#FF3811] hover:text-white hover:border-none w-20"
          onClick={handlenextbutton}
          disabled={currenpage === pages.length - 1}
        >
          next
        </button>
        <select
          value={itemsperpage}
          onChange={handleitemsperpage}
          className="btn outline-none"
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

export default ServicePage;
