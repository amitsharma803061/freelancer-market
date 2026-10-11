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
            <SixCard key={job.id} job={job}></SixCard>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="btn bg-green-400 text-white text-center mb-5">
            <Link to={"/allJobs"}>See All Jobs</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
