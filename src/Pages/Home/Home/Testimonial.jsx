import FadeReveal from "../../../Animation/FadeReveal";
import Reveal from "../../../Animation/Reveal";
import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/assets/images/personprofileimg/Alexander.jpg";
import img2 from "../../../assets/assets/images/personprofileimg/Maria.jpg";
import img3 from "../../../assets/assets/images/personprofileimg/Samuel.jpg";
import img4 from "../../../assets/assets/images/personprofileimg/Olivia.jpg";
import img5 from "../../../assets/assets/images/personprofileimg/David.jpg";
import img6 from "../../../assets/assets/images/personprofileimg/Sophia.jpg";
const Testimonial = () => {
  return (
    <div>
      <div className="lg:mx-24 mt-32">
        {/* title */}
        <FadeReveal>
          <div className="text-center space-y-4">
            <h1 className="text-xl font-bold text-[#FF3811]">Testimonial</h1>
            <h1 className="text-6xl font-bold">What Customer Says</h1>
            <p className="text-base font-semibold text-[#00000066]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised <br />
              words which don't look even slightly believable.
            </p>
          </div>
        </FadeReveal>
      </div>
      <Reveal>
        <div className="">
          <Marquee>
            {/* 1 */}
            <div className="flex px-10 items-center w-[700px] h-[350px] rounded-3xl mr-10 border bg-white shadow-xl mt-20 mb-28">
              <div>
                <div className="flex gap-5 items-center">
                  <img
                    src={img1}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">Alexander</h1>
                    <p className="text-base font-semibold text-[#00000066]">
                      Businessman
                    </p>
                  </div>
                </div>
                <p className="text-base mt-5 font-semibold text-[#00000066]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <div className="flex gap-1 mt-5">
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex px-10 items-center w-[700px] h-[350px] rounded-3xl mr-10 border bg-white shadow-xl mt-20 mb-28">
              <div>
                <div className="flex gap-5 items-center">
                  <img
                    src={img2}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">Maria</h1>
                    <p className="text-base font-semibold text-[#00000066]">
                      Businessman
                    </p>
                  </div>
                </div>
                <p className="text-base mt-5 font-semibold text-[#00000066]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <div className="flex gap-1 mt-5">
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex px-10 items-center w-[700px] h-[350px] rounded-3xl mr-10 border bg-white shadow-xl mt-20 mb-28">
              <div>
                <div className="flex gap-5 items-center">
                  <img
                    src={img3}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">Samuel</h1>
                    <p className="text-base font-semibold text-[#00000066]">
                      Businessman
                    </p>
                  </div>
                </div>
                <p className="text-base mt-5 font-semibold text-[#00000066]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <div className="flex gap-1 mt-5">
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className="flex px-10 items-center w-[700px] h-[350px] rounded-3xl mr-10 border bg-white shadow-xl mt-20 mb-28">
              <div>
                <div className="flex gap-5 items-center">
                  <img
                    src={img4}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">Olivia</h1>
                    <p className="text-base font-semibold text-[#00000066]">
                      Businessman
                    </p>
                  </div>
                </div>
                <p className="text-base mt-5 font-semibold text-[#00000066]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <div className="flex gap-1 mt-5">
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className="flex px-10 items-center w-[700px] h-[350px] rounded-3xl mr-10 border bg-white shadow-xl mt-20 mb-28">
              <div>
                <div className="flex gap-5 items-center">
                  <img
                    src={img5}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">David</h1>
                    <p className="text-base font-semibold text-[#00000066]">
                      Businessman
                    </p>
                  </div>
                </div>
                <p className="text-base mt-5 font-semibold text-[#00000066]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <div className="flex gap-1 mt-5">
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className="flex px-10 items-center w-[700px] h-[350px] rounded-3xl mr-10 border bg-white shadow-xl mt-20 mb-28">
              <div>
                <div className="flex gap-5 items-center">
                  <img
                    src={img6}
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h1 className="text-2xl font-bold">Sophia</h1>
                    <p className="text-base font-semibold text-[#00000066]">
                      Businessman
                    </p>
                  </div>
                </div>
                <p className="text-base mt-5 font-semibold text-[#00000066]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.{" "}
                </p>
                <div className="flex gap-1 mt-5">
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                  <FaStar size={30} color="#FFD700" />
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </Reveal>
    </div>
  );
};

export default Testimonial;
