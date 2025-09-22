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
        <div><label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="dark" />

  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label></div>
        <a className="btn w-36 h-12 text-lg rounded-lg font-bold text-[#FF3811] border-[#FF3811] hover:border-none hover:text-white hover:bg-[#FF3811]">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default Navbar;
