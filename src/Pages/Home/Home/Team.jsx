import FadeReveal from "../../../Animation/FadeReveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import img1 from "../../../assets/assets/images/team/1.jpg"
import img2 from "../../../assets/assets/images/team/2.jpg"
import img3 from "../../../assets/assets/images/team/3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Team = () => {
  return (
    <div className="mt-24">
      {/* title */}
      <FadeReveal>
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold text-[#FF3811]">Team</h1>
          <h1 className="text-6xl font-bold">Meet Our Team</h1>
          <p className="text-base font-semibold text-[#00000066]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br />
            words which don't look even slightly believable.
          </p>
        </div>
      </FadeReveal>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mt-20 mb-32 shadow-lg mx-10 p-7 border text-center rounded-2xl transition delay-150 duration-300 hover:shadow-2xl hover:shadow-[#FF3811] ease-in-out hover:-translate-y-3 hover:scale-110 hover:border-[#FF3811]">
            <img src={img1} alt="" className="rounded-2xl object-cover" />
            <h1 className="font-bold text-3xl mt-5 mb-1">Car Engine Plug</h1>
            <p className="text-xl font-semibold text-[#00000066] mb-6">
              Engine Expert
            </p>
            <div className="flex gap-3 justify-center">
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaFacebookSquare size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaSquareXTwitter size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaLinkedin size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaInstagramSquare size={50} />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="mt-20 mb-32 shadow-lg mx-10 p-7 border text-center rounded-2xl transition delay-150 duration-300 hover:shadow-2xl hover:shadow-[#FF3811] ease-in-out hover:-translate-y-3 hover:scale-110 hover:border-[#FF3811]">
            <img src={img2} alt="" className="rounded-2xl object-cover" />
            <h1 className="font-bold text-3xl mt-5 mb-1">Car Engine Plug</h1>
            <p className="text-xl font-semibold text-[#00000066] mb-6">
              Engine Expert
            </p>
            <div className="flex gap-3 justify-center">
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaFacebookSquare size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaSquareXTwitter size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaLinkedin size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaInstagramSquare size={50} />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="mt-20 mb-32 shadow-lg mx-10 p-7 border text-center rounded-2xl transition delay-150 duration-300 hover:shadow-2xl hover:shadow-[#FF3811] ease-in-out hover:-translate-y-3 hover:scale-110 hover:border-[#FF3811]">
            <img src={img3} alt="" className="rounded-2xl object-cover" />
            <h1 className="font-bold text-3xl mt-5 mb-1">Car Engine Plug</h1>
            <p className="text-xl font-semibold text-[#00000066] mb-6">
              Engine Expert
            </p>
            <div className="flex gap-3 justify-center">
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaFacebookSquare size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaSquareXTwitter size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaLinkedin size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaInstagramSquare size={50} />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="mt-20 mb-32 shadow-lg mx-10 p-7 border text-center rounded-2xl transition delay-150 duration-300 hover:shadow-2xl hover:shadow-[#FF3811] ease-in-out hover:-translate-y-3 hover:scale-110 hover:border-[#FF3811]">
            <img src={img3} alt="" className="rounded-2xl object-cover" />
            <h1 className="font-bold text-3xl mt-5 mb-1">Car Engine Plug</h1>
            <p className="text-xl font-semibold text-[#00000066] mb-6">
              Engine Expert
            </p>
            <div className="flex gap-3 justify-center">
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaFacebookSquare size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaSquareXTwitter size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaLinkedin size={50} />
              </button>
              <button className="transition delay-150 duration-300 ease-in-out hover:-translate-y-3 hover:scale-110 hover:text-[#FF3811]">
                <FaInstagramSquare size={50} />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
