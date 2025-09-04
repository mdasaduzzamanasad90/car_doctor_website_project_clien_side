import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bannerimage1 from "../../../assets/assets/images/banner/1.jpg";
import bannerimage2 from "../../../assets/assets/images/banner/2.jpg";
import bannerimage3 from "../../../assets/assets/images/banner/3.jpg";
import bannerimage4 from "../../../assets/assets/images/banner/4.jpg";
import bannerimage5 from "../../../assets/assets/images/banner/5.jpg";
import bannerimage6 from "../../../assets/assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="mt-40 lg:mx-24">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={() => {
          const all = document.querySelectorAll(".banner-content");
          all.forEach((el) => {
            el.classList.remove("slide-fade");
            void el.offsetWidth;
            el.classList.add("slide-fade");
          });
        }}
      >
        {/* Banner 1 */}
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <img
              src={bannerimage1}
              alt=""
              className="h-[500px] rounded-xl w-full object-cover"
            />
            <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
              <div className="slide-fade space-y-6 mt-20 ml-32 banner-content">
                <h1 className="text-white text-7xl font-bold">
                  Affordable <br />
                  Price For Car <br />
                  Servicing
                </h1>
                <p className="text-[#FFFFFFCC] font-medium">
                  There are many variations of passages of available, but
                  <br />
                  the majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Discover More
                  </button>
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Banner 2 */}
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <img
              src={bannerimage2}
              alt=""
              className="h-[500px] rounded-xl w-full object-cover"
            />
            <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
              <div className="slide-fade space-y-6 mt-20 ml-32 banner-content">
                <h1 className="text-white text-7xl font-bold">
                  Affordable <br />
                  Price For Car <br />
                  Servicing
                </h1>
                <p className="text-[#FFFFFFCC] font-medium">
                  There are many variations of passages of available, but
                  <br />
                  the majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Discover More
                  </button>
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Banner 3 */}
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <img
              src={bannerimage3}
              alt=""
              className="h-[500px] rounded-xl w-full object-cover"
            />
            <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
              <div className="banner-content slide-fade space-y-6 mt-20 ml-32">
                <h1 className="text-white text-7xl font-bold">
                  Affordable <br />
                  Price For Car <br />
                  Servicing
                </h1>
                <p className="text-[#FFFFFFCC] font-medium">
                  There are many variations of passages of available, but
                  <br />
                  the majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Discover More
                  </button>
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Banner 4 */}
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <img
              src={bannerimage4}
              alt=""
              className="h-[500px] rounded-xl w-full object-cover"
            />
            <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
              <div className="banner-content slide-fade space-y-6 mt-20 ml-32">
                <h1 className="text-white text-7xl font-bold">
                  Affordable <br />
                  Price For Car <br />
                  Servicing
                </h1>
                <p className="text-[#FFFFFFCC] font-medium">
                  There are many variations of passages of available, but
                  <br />
                  the majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Discover More
                  </button>
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Banner 5 */}
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <img
              src={bannerimage5}
              alt=""
              className="h-[500px] rounded-xl w-full object-cover"
            />
            <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
              <div className="banner-content slide-fade space-y-6 mt-20 ml-32">
                <h1 className="text-white text-7xl font-bold">
                  Affordable <br />
                  Price For Car <br />
                  Servicing
                </h1>
                <p className="text-[#FFFFFFCC] font-medium">
                  There are many variations of passages of available, but
                  <br />
                  the majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Discover More
                  </button>
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Banner 6 */}
        <SwiperSlide>
          <div className="relative h-[500px] w-full">
            <img
              src={bannerimage6}
              alt=""
              className="h-[500px] rounded-xl w-full object-cover"
            />
            <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[#15151500]">
              <div className="banner-content slide-fade space-y-6 mt-20 ml-32">
                <h1 className="text-white text-7xl font-bold">
                  Affordable <br />
                  Price For Car <br />
                  Servicing
                </h1>
                <p className="text-[#FFFFFFCC] font-medium">
                  There are many variations of passages of available, but
                  <br />
                  the majority have suffered alteration in some form
                </p>
                <div className="flex gap-5">
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Discover More
                  </button>
                  <button className="btn w-40 bg-[#FFFFFF00] text-white hover:bg-[#FF3811] hover:border-none font-semibold text-lg">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* left and right button */}
      <div className="flex absolute bottom-12 right-36 z-10 gap-5">
        <button className="custom-prev btn btn-circle w-16 h-12 text-white bg-[#FFFFFF00] hover:border-none hover:bg-[#FF3811] transition ease-in-out delay-150 hover:scale-125 duration-300 ">
          <FaArrowLeft size={30} />
        </button>
        <button className="custom-next btn btn-circle w-16 h-12 text-white bg-[#FFFFFF00] hover:border-none hover:bg-[#FF3811] transition ease-in-out delay-150 hover:scale-125 duration-300 ">
          <FaArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
