import logo from "../../assets/assets/icons/logo.svg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Reveal from "../../Animation/Reveal";
const Footer = () => {
  return (
    <Reveal>
      {" "}
      <footer className="footer lg:flex justify-between bg-base-200 text-base-content py-10 px-24 mt-10">
        <aside className="space-y-4">
          <img src={logo} alt="" />
          <p className="text-base font-semibold text-[#00000066] text-left">
            Edwin Diaz is a software and web <br />
            technologies engineer, a life coach
            <br />
            trainer who is also a serial .
          </p>
          <div className="gap-3 flex">
            {/* googl */}
            <Link to={"https://www.google.com"}>
              <button className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 duration-500 border border-[black] hover:border-orange-500 hover:text-orange-500 p-2 rounded-lg">
                <FaGoogle size={20} />
              </button>
            </Link>
            {/* twitter */}
            <Link to={"https://x.com"}>
              <button className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 duration-500 border border-[black]  hover:border-orange-500 hover:text-orange-500 p-2 rounded-lg">
                <FaTwitter size={20} />
              </button>
            </Link>
            {/* instagram */}
            <Link to={"https://www.instagram.com"}>
              <button className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 duration-500 border border-[black]  hover:border-orange-500 hover:text-orange-500 p-2 rounded-lg">
                <FaInstagram size={20} />
              </button>
            </Link>
            {/* linkedin */}
            <Link to={"https://www.linkedin.com"}>
              <button className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-125 duration-500 border border-[black]  hover:border-orange-500 hover:text-orange-500 p-2 rounded-lg">
                <FaLinkedin size={20} />
              </button>
            </Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-lg">About</h6>
          <a className="link link-hover hover:text-orange-500 font-semibold text-base">
            Home
          </a>
          <a className="link link-hover hover:text-orange-500 font-semibold text-base">
            Service
          </a>
          <a className="link link-hover hover:text-orange-500 font-semibold text-base">
            Contact
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg">Company</h6>
          <a className="link link-hover hover:text-orange-500 font-semibold text-base">
            Why Car Doctor
          </a>
          <a className="link link-hover hover:text-orange-500 font-semibold text-base">
            About
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg">Support</h6>
          <a className="link link-hover hover:text-orange-500 font-semibold text-base">
            Support Center
          </a>
          <a className="link link-hover hover:text-orange-500 font-semibold text-base">
            Feedback
          </a>
          <a className="link link-hover hover:text-orange-500 font-semibold text-base">
            Accesbility
          </a>
        </nav>
      </footer>
    </Reveal>
  );
};

export default Footer;
