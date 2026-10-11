const SixCard = ({ job }) => {
  const { title, category, coverImage } = job;
  return (
    <div className="bg-base-300 w-full rounded-xl">
      <img src={coverImage} alt="" className="w-full h-80 rounded-2xl p-4" />
      <div className="flex justify-between items-center font-bold">
        <h2 className="ml-4">{title}</h2>
        <h2 className="mr-4 w-45 h-7 text-center bg-green-200 rounded-2xl text-red-600">
          {category}
        </h2>
      </div>

      <button className="btn w-full bg-green-300 rounded-4xl mt-3 mb-3">
        Details
      </button>
    </div>
  );
};

export default SixCard;
