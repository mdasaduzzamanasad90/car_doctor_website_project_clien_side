import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import Scroll from "../Component/Scroll";

const Main = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scroll up - show navbar
        setShowNavbar(true);
      } else {
        // Scroll down - hide navbar
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-40"
        } bg-white/50 backdrop-blur-md shadow-lg`}
      >
        <Navbar />
      </div>
      <Scroll></Scroll>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
