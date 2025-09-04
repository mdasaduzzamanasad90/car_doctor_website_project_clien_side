import aboutimg1 from "../../../assets/assets/images/about_us/person.jpg";
import aboutimg2 from "../../../assets/assets/images/about_us/parts.jpg";
import { useEffect, useRef } from "react";

const AboutUs = () => {

  const aboutImg1Ref = useRef(null);
  const aboutImg2Ref = useRef(null);
  const aboutImg3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {

      const element1 = aboutImg1Ref.current;
      const element2 = aboutImg2Ref.current;
      const element3 = aboutImg3Ref.current;

      const rect1 = element1?.getBoundingClientRect();
      const rect2 = element2?.getBoundingClientRect();
      const rect3 = element3?.getBoundingClientRect();

      const isInView1 = rect1 && rect1.top < window.innerHeight;
      const isInView2 = rect2 && rect2.top < window.innerHeight;
      const isInView3 = rect3 && rect3.top < window.innerHeight;

      if (isInView1) {
        element1.classList.add("AboutUsImage1");
      }
      if (isInView2) {
        element2.classList.add("AboutUsImage2");
      }
      if (isInView3) {
        element3.classList.add("AboutUsText");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // page load e check korbe

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div>
      <div className="lg:mx-24 mt-32 mb-44 lg:flex justify-between">
        {/* abuot image */}
        <div className="relative">
            <img
              ref={aboutImg1Ref}
              src={aboutimg1}
              alt=""
              className="h-[470px] w-[510px] object-cover rounded-3xl"
            />
            <img
              ref={aboutImg2Ref}
              src={aboutimg2}
              alt=""
              className="absolute -right-20 -bottom-10 h-[300px] w-[350px] object-cover border-[15px] border-white shadow-xl rounded-xl"
            />
        </div>
        {/* about text */}
        <div ref={aboutImg3Ref} className="w-5/12 space-y-6">
          <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
          <h1 className="text-6xl font-bold">
            We are qualified <br />& of experience <br />
            in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-base font-semibold text-[#00000066] text-left">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn text-lg font-bold hover:text-white hover:bg-[#FF3811] w-40 hover:border-none border-[#FF3811] bg-white text-[#FF3811]">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
