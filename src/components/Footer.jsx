import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full mx-auto  bg-[#1E3E35]">
      <h2 className="text-white text-3xl font-bold pt-10 ml-20">
        B.D Market Place
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 pb-8">
        <div>
          <h2 className="text-xl text-white/80">JOb Category</h2>
          <div className="text-white/70 space-y-3 mt-3">
            <h2>Web Development</h2>
            <h2>Vibe Coding</h2>
            <h2>Video Editing</h2>
            <h2>Softwaer Development</h2>
            <h2>Digital Marketing</h2>
          </div>
        </div>
        {/**222 */}
        <div>
          <h2 className="text-xl text-white/80">Language</h2>
          <div className="text-white/70 space-y-3 mt-3">
            <h2>Python</h2>
            <h2>Java</h2>
            <h2>C ++</h2>
            <h2>SQL</h2>
            <h2>PHP </h2>
          </div>
        </div>
        {/**222 */}
        <div>
          <h2 className="text-xl text-white/80">For Buyers</h2>
          <div className="text-white/70 space-y-3 mt-3">
            <h2>Post a Job</h2>
            <h2>Browse Freelancers</h2>
            <h2>Enterprise Solutions</h2>
            <h2>Payment Security</h2>
            <h2>Success Stories</h2>
          </div>
        </div>
        {/**222 */}
        <div>
          <h2 className="text-xl text-white/80">For Freelancers</h2>
          <div className="text-white/70 space-y-3 mt-3">
            <h2>Become a Seller</h2>
            <h2>Seller Dashboard</h2>
            <h2>Community & Forum</h2>
            <h2>Freelance Guides</h2>
            <h2>Resources</h2>
          </div>
        </div>
        {/**222 */}
        <div>
          <h2 className="text-xl text-white/80">Company & Support</h2>
          <div className="text-white/70 space-y-3 mt-3">
            <h2>About B.D Market Place</h2>
            <h2>How It Works</h2>
            <h2>Help & Support</h2>
            <h2>Terms & Conditions</h2>
            <h2>Privacy Policy</h2>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex justify-between gap-30">
        <div className="text-sm text-red-300 mb-5">
          <h2>@ 2026 made.by.Amit.Creation</h2>
        </div>
        <div className="text-red-300 text-xl flex gap-5 mr-50 mb-5">
          <h2>
            <FaFacebook />
          </h2>
          <h2>
            <IoLogoYoutube />
          </h2>
          <h2>
            <FaInstagram />
          </h2>
          <h2>
            <FaGithub />
          </h2>
          <h2>
            <FaTwitter />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
