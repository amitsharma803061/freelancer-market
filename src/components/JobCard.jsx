import { Link } from "react-router";

const JobCard = ({ data }) => {
  const { _id, coverImage, title, category } = data;

  return (
    <div className="bg-gray-200 w-full rounded-xl hover:scale-105 transition ease-in-out">
      <img src={coverImage} alt="" className="w-full h-80 rounded-2xl p-4" />
      <div className="font-bold space-y-2">
        <h2 className="text-red-400 font-semibold ml-4">{category}</h2>
        <h2 className="ml-4">{title}</h2>
      </div>

      <Link
        to={`/job-details/${_id}`}
        className="btn w-full bg-green-300 rounded-4xl mt-3 mb-3"
      >
        Details
      </Link>
    </div>
  );
};

export default JobCard;
