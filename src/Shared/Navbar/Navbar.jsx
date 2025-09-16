import logo from "../../assets/assets/icons/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Authcontex } from "../../Provider/AuthProvider";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();
  // /////////////////////////////////////////////////
  const isServiceActive =
    location.pathname === "/allservice" || location.pathname === "/item2";
  // ///////////////////////////////////////////////
  const { user, logout, loading } = useContext(Authcontex);
  const [active, setactive] = useState(false);
  // const [shopingactive, setshopingactive] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const handalsigninorsignout = () => {
    logout()
      .then((res) => {
        const user = res.user;
        console.log("logout", user);
      })
      .catch((error) => console.log(error));
  };
  const link = (
    <div className="lg:flex items-center">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-[#FF3811] font-semibold text-xl"
              : "font-semibold text-xl"
          }
        >
          Home
        </NavLink>
      </li>
      <div className="dropdown dropdown-hover menu menu-sm">
        <div
          tabIndex={0}
          role="button"
          className={
            isServiceActive
              ? "text-[#FF3811] font-semibold text-xl p-2"
              : "font-semibold text-xl p-2"
          }
        >
          Service
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <NavLink
              to={"/allservice"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-lg"
                  : "font-semibold text-lg"
              }
            >
              All Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/addservice"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-lg"
                  : "font-semibold text-lg"
              }
            >
              Add Service
            </NavLink>
          </li>
        </ul>
      </div>
      {loading ? (
        <span className="loading loading-dots loading-xl text-[#FF3811]"></span>
      ) : user ? (
        <>
          {" "}
          <li>
            <NavLink
              onClick={handalsigninorsignout}
              className="font-semibold text-xl"
            >
              Logout
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shoping"}
              className={({ isActive }) =>
                isActive ? "text-[#FF3811] font-bold" : "font-bold"
              }
            >
              <HiOutlineShoppingBag size={30} />
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-xl"
                  : "font-semibold text-xl"
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/signup"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#FF3811] font-semibold text-xl"
                  : "font-semibold text-xl"
              }
            >
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </div>
  );

  const searchicon = () => {
    setactive(true);
  };

  useEffect(() => {
    if (active && inputRef.current) {
      inputRef.current.focus(); // Focus when search is opened
    }
  }, [active]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setactive(false); //  ক্লিক করলে বন্ধ করে দাও
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <img src={logo} alt="website logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end space-x-3">
        {/* login or singup korle user image  */}
        {loading ? (
          <span className="loading loading-dots loading-xl text-[#FF3811]"></span>
        ) : user ? (
          <img
            src={user?.photoURL}
            alt="img"
            className="rounded-full w-10 object-cover"
          />
        ) : (
          <Link to="/shoping">
            <FaUser size={30} />
          </Link>
        )}

        <div ref={dropdownRef}>
          <div className="m-1">
            <IoSearchOutline
              onClick={searchicon}
              className={`${
                active
                  ? "text-orange-500 scale-150 -translate-y-2"
                  : "transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-150 duration-500 hover:text-orange-500"
              }`}
              size={30}
            />
          </div>
          <div className={`${active ? "relative " : "hidden"}`}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Type here"
              className="inpu outline-none border rounded-lg absolute z-10 top-3 w-80 p-2 shadow-sm right-5"
            />
          </div>
        </div>
        <a className="btn w-36 h-12 text-lg rounded-lg font-bold text-[#FF3811] border-[#FF3811] hover:border-none hover:text-white hover:bg-[#FF3811]">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default Navbar;
