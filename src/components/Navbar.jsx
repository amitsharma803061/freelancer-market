import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const limks = (
    <>
      <li>
        <NavLink to={"/"} className={"nav-item"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/allJobs"} className={"nav-item"}>
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink to={"/addJob"} className={"nav-item"}>
          Add a Job
        </NavLink>
      </li>
      <li>
        <NavLink to={"/myTasks"} className={"nav-item"}>
          My Accepted Tasks
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar h-20 bg-purple-500 shadow-md px-4 lg:px-8">
      {/* 1 */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiAlignJustify className="text-2xl text-white" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {limks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-primary">Menu</a>
      </div>

      {/* 2 */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-white font-medium">
          {limks}
        </ul>
      </div>

      {/* 3 */}
      <div className="navbar-end gap-2">
        <Link
          to={"/login"}
          className="btn btn-outline btn-sm sm:btn-md text-white"
        >
          Login
        </Link>
        <button className="btn btn-primary btn-sm sm:btn-md text-white">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
