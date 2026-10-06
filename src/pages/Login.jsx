import { Link } from "react-router";
import logo from "../assets/e_commerce.jpg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    // w-full mx-auto h-163 bg-purple-700
    <div className="">
      <div className="flex justify-between items-center">
        <div className="">
          <img src={logo} alt="" className="h-228" />
        </div>
        <div className="w-150 h-228 bg-purple-400">
          <div className="card-body mt-30">
            <h1 className="text-3xl text-white/80 font-bold text-center">
              Register
            </h1>
            <form>
              <fieldset className="fieldset">
                {/* email field */}

                <label className="label text-base text-white ml-12">Name</label>
                <input
                  type="text"
                  name="displayName"
                  className="input w-100 focus:outline-gray-200 ml-12"
                  placeholder="Name"
                />

                <label className="label text-base text-white ml-12">
                  PhotoURL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  className="input w-100 focus:border-0 focus:outline-gray-200 ml-12"
                  placeholder="Photo URL"
                />
                {/* email field */}
                <label className="label text-base text-white ml-12">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input w-100 focus:border-0 focus:outline-gray-200 ml-12"
                  placeholder="Email"
                />
                {/* password field */}
                <label className="label text-base text-white ml-12">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input w-100 focus:border-0 focus:outline-gray-200 ml-12"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover text-base text-white ml-12">
                    Forgot password?
                  </a>
                </div>
                <button className="btn text-white mt-4 w-100 bg-linear-to-r from-green-600 to-green-300 ml-12">
                  Register
                </button>
              </fieldset>
            </form>

            <button
              //   onClick={handleGoogleSignIn}
              className="btn bg-white w-100 text-black border-[#e5e5e5] ml-12"
            >
              <FcGoogle />
              Login with Google
            </button>
            <p className="text-center">
              Already have an account? Please{" "}
              <Link
                className="text-blue-500 hover:text-blue-800 ml-12"
                to="/login"
              >
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
