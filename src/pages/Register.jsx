import { Link, useNavigate } from "react-router";
import logo from "../assets/e_commerce.jpg";
import { FcGoogle } from "react-icons/fc";
import { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContexts";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // toast.loading("Creating user...", { id: "create user" });

    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;
    if (!regExp.test(password)) {
      toast.error(
        "Please must be a strong password and A-z, special chrecters, number",
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        toast.success("User create successfully", { id: "create-user" });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    // toast.loading("creatnig user...", { id: "create-user" });
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully", { id: "create-user" });
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

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
        <div className="card-body md:w-10/12 lg:w-8/12 w-10/12 mx-auto">
          <h1 className="text-3xl text-white/80 font-bold text-center mt-4">
            Register
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name field */}

              <label className="label text-base text-white">Name</label>
              <input
                type="text"
                name="displayName"
                className="input w-full focus:outline-gray-200"
                placeholder="Name"
              />

              <label className="label text-base text-white">PhotoURL</label>
              <input
                type="text"
                name="photoURL"
                className="input w-full focus:border-0 focus:outline-gray-200"
                placeholder="Photo URL"
              />
              {/* email field */}
              <label className="label text-base text-white">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full focus:border-0 focus:outline-gray-200"
                placeholder="Email"
              />
              {/* password field */}
              <div className="relative">
                <label className="label text-base text-white">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input w-full focus:border-0 focus:outline-gray-200 "
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div>
                <a className="link link-hover text-base text-white">
                  Forgot password?
                </a>
              </div>
              <button className="btn text-white mt-4 w-full bg-linear-to-r from-green-600 to-green-300 ">
                Register
              </button>
            </fieldset>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white w-full text-black border-[#e5e5e5] mt-2"
          >
            <FcGoogle />
            Login with Google
          </button>
          <p className="text-center mt-2 mb-5">
            Please! Login our account?
            <Link className="text-blue-500 hover:text-blue-800 " to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
