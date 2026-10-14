import { useLoaderData } from "react-router";
import JobCard from "../components/JobCard";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const AllJobs = () => {
  const datas = useLoaderData();
  console.log(datas);

  // Search button a apps ke khuje pete search option
  const [search, setSearch] = useState("");

  const button = search.trim().toLocaleLowerCase();

  const searchedJobs = button
    ? datas.filter(
        (data) => data.title.toLocaleLowerCase().includes(button),
        // (data.category && data.category.toLocaleLowerCase().includes(button))
      )
    : datas;
  console.log(searchedJobs);
  return (
    <div className="w-full mx-auto p-7">
      <h2 className="text-4xl font-bold text-center">All Jobs Are Here.</h2>
      <div className="flex justify-between items-center mt-3">
        <h2 className="text-2xl font-bold">
          All job <span className="text-red-400">({datas.length})</span>
        </h2>
        <label className="">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input w-80 focus:outline-gray-200 rounded-l-2xl"
            placeholder="Search the job"
          />
          <button type="Submit" className="btn rounded-r-2xl">
            <FiSearch className="w-6 h-6" />
          </button>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-3">
        {searchedJobs.map((data) => (
          <JobCard key={data._id} data={data}>
            {data.title}
          </JobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
