import { Link, useLoaderData } from "react-router-dom";
import imgdetail from "../../assets/assets/images/checkout/checkout.png";
import { FaArrowRight } from "react-icons/fa6";
import "./ServiceDetails.css";
import { MdFileDownload } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import carddoctorimg from "../../assets/assets/icons/logo.svg";
import Item from "./Item";
import { useEffect, useState } from "react";
import FadeReveal from "../../Animation/FadeReveal";
import Reveal from "../../Animation/Reveal";
import Xreveal from "../../Animation/Xreveal";

const ServiceDetails = () => {
  const servicedetail = useLoaderData();
  const { _id, img, title, price, description, facility } = servicedetail;
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-ue3r.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div className="lg:mx-24 mt-32">
      <FadeReveal>
        <div className="relative rounded-2xl">
          <img src={imgdetail} alt="" className="w-full" />
          <div className="absolute flex items-center rounded-2xl inset-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
            <h1 className="text-white text-6xl font-bold pl-10">
              Service Details
            </h1>
            <div className="w-[500px] flex items-center justify-center absolute bottom-0 right-[325px] h-[70px] bg-[#FF3811] [clip-path:polygon(25%_0,75%_0,100%_100%,0_100%)]">
              <h1 className="text-white font-bold text-2xl">{title}</h1>
            </div>
          </div>
        </div>
      </FadeReveal>
      <div className="grid grid-cols-3 mt-20 gap-20">
        <div className="col-span-2">
          <Reveal>
            <img src={img} alt="" className="w-full h-[400px] object-cover" />
          </Reveal>
          <Reveal>
            <div>
              <h1 className="text-5xl mt-8 mb-5 font-bold">
                Unique Car Engine Service
              </h1>
              <p className="text-base font-semibold text-[#00000066] text-left">
                {description}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-8 my-10">
            {facility.map((item) => (
              <Item key={item.index} item={item}></Item>
            ))}
          </div>
          <Reveal>
            {" "}
            <p className="text-base font-semibold text-[#00000066] text-left">
              {description}
            </p>
          </Reveal>
          <Reveal>
            <div>
              <h1 className="text-5xl mt-8 mb-5 font-bold">
                3 Simple Steps to Process
              </h1>
              <p className="text-base font-semibold text-[#00000066] text-left">
                {description}
              </p>
            </div>
          </Reveal>
          {/* 3 Simple Steps to Process */}
          <div className="flex justify-between mt-10">
            {/* 01 */}
            <Reveal>
              <div className="border-t-4 rounded-3xl py-5 px-10 shadow-md border-[#FF3811B3]">
                <div className="flex justify-center">
                  <button className="relative flex w-12 h-12 mb-5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF3811B3] opacity-75"></span>
                    <span class="relative inline-flex w-12 h-12 justify-center items-center rounded-full bg-[#FF3811] text-white font-bold text-xl">
                      01
                    </span>
                  </button>
                </div>
                <h1 className="text-2xl font-semibold text-center mb-2">
                  Step One
                </h1>
                <p className="text-base text-center font-semibold text-[#00000066]">
                  It Uses A Dictionary <br />
                  Of Over 200 .
                </p>
              </div>
            </Reveal>
            {/* 02 */}
            <Reveal>
              <div className="border-t-4 rounded-3xl py-5 px-10 shadow-md border-[#FF3811B3]">
                <div className="flex justify-center">
                  <button className="relative flex w-12 h-12 mb-5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF3811B3] opacity-75"></span>
                    <span class="relative inline-flex w-12 h-12 justify-center items-center rounded-full bg-[#FF3811] text-white font-bold text-xl">
                      02
                    </span>
                  </button>
                </div>
                <h1 className="text-2xl font-semibold text-center mb-2">
                  Step Two
                </h1>
                <p className="text-base text-center font-semibold text-[#00000066]">
                  It Uses A Dictionary <br />
                  Of Over 200 .
                </p>
              </div>
            </Reveal>
            {/* 03 */}
            <Reveal>
              <div className="border-t-4 rounded-3xl py-5 px-10 shadow-md border-[#FF3811B3]">
                <div className="flex justify-center">
                  <button className="relative flex w-12 h-12 mb-5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF3811B3] opacity-75"></span>
                    <span class="relative inline-flex w-12 h-12 justify-center items-center rounded-full bg-[#FF3811] text-white font-bold text-xl">
                      03
                    </span>
                  </button>
                </div>
                <h1 className="text-2xl font-semibold text-center mb-2">
                  Step Three
                </h1>
                <p className="text-base text-center font-semibold text-[#00000066]">
                  It Uses A Dictionary <br />
                  Of Over 200 .
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="my-16">
              <iframe
                className="w-full h-[420px] rounded-2xl shadow-xl"
                src="https://www.youtube.com/embed/chs1olizWUw?si=JQJZ2vjE8lY6m5Lv"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </Reveal>
        </div>
        <div>
          {/* services */}
          <Xreveal>
            <div className="shadow-lg space-y-3 p-5 rounded-lg">
              <h1 className="text-left text-2xl font-bold">Services</h1>

              {/* services item */}
              <div className="space-y-3">
                {services.map((service) => (
                  <div
                    className={`flex justify-between w-full btn text-lg shadow-md font-semibold 
              ${
                title === service.title
                  ? "text-white border-none bg-[#FF3811]"
                  : "text-[#FF3811] bg-white hover:text-white hover:border-none hover:bg-[#FF3811]"
              }`}
                  >
                    <Link to={`/serviceDetails/${service._id}`}>
                      <button>{service.title}</button>
                    </Link>
                    <div>
                      <FaArrowRight size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Xreveal>
          {/* Download */}
          <Xreveal>
            <div className="text-white bg-black p-5 mt-10">
              <h1 className="text-2xl">Download</h1>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <FaRegFileAlt size={30} />
                  <div className="text-lg">
                    <h1>Our Brochure</h1>
                    <p className="text-sm text-[#FFFFFF]">Download</p>
                  </div>
                </div>
                <button className="btn hover:bg-[#FF3811] text-[#FF3811] hover:text-white hover:border-none w-20">
                  <MdFileDownload size={30} />
                </button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <FaRegFileAlt size={30} />
                  <div className="text-lg">
                    <h1>Company Details</h1>
                    <p className="text-sm text-[#FFFFFF]">Download</p>
                  </div>
                </div>
                <button className="btn hover:bg-[#FF3811] text-[#FF3811] hover:text-white hover:border-none w-20">
                  <MdFileDownload size={30} />
                </button>
              </div>
            </div>
          </Xreveal>
          {/* speacial */}
          <Xreveal>
            <div className="text-center bg-gray-100 space-y-5 my-10 rounded-xl shadow-lg px-8 py-12">
              <div className="flex justify-center ">
                <img src={carddoctorimg} alt="" />
              </div>
              <h1 className="font-bold text-2xl">
                Need Help? We Are Here <br />
                To Help You
              </h1>
              <div className="bg-white py-8 rounded-lg relative">
                <div className="space-y-1">
                  <h1 className="text-xl font-bold">
                    <span className="text-[#FF3811]">Car Doctor</span> Special
                  </h1>
                  <p className="font-semibold text-base">
                    Save Up To <span className="text-[#FF3811]">60% Off</span>
                  </p>
                </div>
                <div className="absolute -bottom-5 right-[66px]">
                  <button className="btn border-none text-white bg-[#FF3811] font-bold text-lg shadow-xl hover:bg-black">
                    Get A Quote
                  </button>
                </div>
              </div>
            </div>
          </Xreveal>
          <Reveal>
            <h1 className="text-3xl font-bold text-center">Price : ${price}</h1>
            <Link to={`/confamorder/${_id}`}>
              <button className="btn mt-10 w-full text-xl font-semibold text-[#FF3811] hover:text-white hover:bg-[#FF3811] hover:border-none shadow-md">
                Service Confirm
              </button>
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
