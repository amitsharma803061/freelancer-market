import { use } from "react";
import Banner from "../pages/Banner";
import SixCard from "./SixCard";
import { Link } from "react-router";

const sixJobPromise = fetch("http://localhost:3000/six-job").then((res) =>
  res.json(),
);
const Home = () => {
  const jobs = use(sixJobPromise);
  return (
    <div className="w-full mx-auto bg-gradient-to-r from-[#a12fff] via-[#ce24dd] to-[#ff5ecf]">
      <Banner />
      <div className="pt-190">
        <h2 className="text-center text-4xl text-white/70 font-bold">
          Latest Jobs
        </h2>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 p-5">
          {jobs.map((job) => (
            <SixCard key={job._id} job={job}></SixCard>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button class="btn bg-blue-500 text-white border-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_#2563eb,0_0_50px_#2563eb,0_0_100px_#2563eb] mb-5">
            <Link to={"/all-Jobs"}>See All Jobs</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
