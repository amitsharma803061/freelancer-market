import { Link } from "react-router";
import logo from "../assets/e_commerce.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="w-full mx-auto flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <img
          src={logo}
          alt=""
          className="w-full h-auto md:h-150 object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-auto md:h-150 bg-purple-400">
        <h2 className="text-9xl font-bold text-gray-300 italic">E</h2>
        <div className="card-body md:w-10/12 lg:w-8/12 w-10/12 mx-auto">
          <h1 className="text-3xl text-white/80 font-bold text-center">
            Create a account
          </h1>
          <form>
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label text-base text-white">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />
              {/* password field */}
              <label className="label text-base text-white">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full focus:border-0 focus:outline-gray-200 "
                placeholder="Password"
              />
              <div>
                <a className="link link-hover text-base text-white">
                  Forgot password?
                </a>
              </div>
              <button className="btn text-white mt-4 w-full bg-linear-to-r from-green-600 to-green-300 ">
                Login
              </button>
            </fieldset>
          </form>
          <button
            //   onClick={handleGoogleSignIn}
            className="btn bg-white w-full text-black border-[#e5e5e5] mt-2"
          >
            <FcGoogle />
            Login with Google
          </button>
          <p className="text-center mt-2 mb-5">
            Already have an account? Please
            <Link className="text-blue-500 hover:text-blue-800 " to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
