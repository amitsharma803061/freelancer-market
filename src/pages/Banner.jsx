import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const videos = [
  "https://res.cloudinary.com/rm7stp3m/video/upload/v1791487975/77830-847111360_medium.mp4",
  "https://res.cloudinary.com/rm7stp3m/video/upload/v1791482820/5585939-hd_1920_1080_25fps.mp4",
  "https://res.cloudinary.com/rm7stp3m/video/upload/v1791487933/7680111-uhd_4096_2160_25fps.mp4",
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play hte carousel every 6 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlid = () =>
    setCurrent((current - 1 + videos.length) % videos.length);
  const nextSlid = () => setCurrent((current + 1) % videos.length);

  return (
    <>
      <div className="absolute w-full flex top-0 left-0 justify-center mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full overflow-hidden bg-black rounded-2xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {videos.map((src, i) => (
                <div key={i} className="w-full shrink-0 relative">
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[60vh] object-cover brightness-90"
                  />
                </div>
              ))}
            </div>
            {/**navigation button  */}
            <button
              onClick={prevSlid}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlid}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/***Dost indicator */}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {videos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${current === i ? "bg-white w-4" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mv-[500px]"></div>
    </>
  );
};

export default Banner;
