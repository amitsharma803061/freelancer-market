import { use, useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContexts";
import { FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  // const handleSignOut = () => {
  //   signOutUser()
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const limks = (
    <>
      <li>
        <NavLink to={"/"} className={"nav-item"}>
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/all-Jobs"} className={"nav-item"}>
              All Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add-Job"} className={"nav-item"}>
              Add a Job
            </NavLink>
          </li>
          <li>
            <NavLink to={"/myTasks"} className={"nav-item"}>
              My Accepted Tasks
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar h-20 bg-[#1E3A8A] shadow-md px-4 lg:px-8">
      {/* 1 */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiAlignJustify className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 text-[#FFFFFF] shadow bg-base-100 rounded-box w-52"
          >
            {limks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-blue-500">Menu</a>
      </div>

      {/* 2 */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-[#FFFFFF] font-medium">
          {limks}
        </ul>
      </div>

      {/* 3 */}
      {user ? (
        <div className="dropdown dropdown-end z-50 ml-100">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 border-2 border-gray-300 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                referrerPolicy="no-referrer"
                src={
                  user.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <div className=" pb-3 border-b border-b-gray-200">
              <li className="text-sm font-bold">{user.displayName}</li>
              <li className="text-xs">{user.email}</li>
            </div>
            <li className="mt-3">
              <Link to={"/profile"}>
                <FaUser /> Profile
              </Link>
            </li>

            <li>
              <Link to={"/all-Jobs"}>All jobs</Link>
            </li>

            <li>
              <Link to={"/mytasks"}>My Accepted Tasks</Link>
            </li>

            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="toggle"
            />

            <li>
              <a>
                {" "}
                <FaGear /> Settings
              </a>
            </li>
            <li>
              <button
                onClick={signOutUser}
                className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
              >
                <IoLogOut /> Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-end gap-2">
          <Link
            to={"/login"}
            className="btn btn-outline btn-sm text-[#FFFFFF] sm:btn-md"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="btn btn-primary btn-sm text-[#b94242] sm:btn-md"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
