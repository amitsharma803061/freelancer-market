import { useLoaderData } from "react-router";

const JobDetails = () => {
  const data = useLoaderData();

  const { title, postedBy, category, summary, coverImage, userEmail } = data;
  return (
    <div className="w-full mx-auto bg-base-300">
      <div className="w-11/12 mx-auto flex gap-10">
        <div>
          <img src={coverImage} alt="coverImage" className="w-1000 h-150 p-5" />
        </div>
        <div>
          <h2>{title}</h2>
          <h2>{category}</h2>
          <h2>{postedBy}</h2>
          <p>{summary}</p>
          <h2>{userEmail}</h2>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
