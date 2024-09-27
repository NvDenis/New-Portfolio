import anhdaidien from "../../assets/anhdaidien_4.jpg";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const Profile = () => {
  return (
    <div className="section flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-20 min-h-[80vh]">
      <img
        src={anhdaidien}
        alt=""
        className="rounded-[60%] object-cover w-[275px] h-[275px] lg:w-[400px] lg:h-[400px]"
      />

      <div className="flex flex-col items-center">
        <p className="text-textGrey text-lg mb-2">Hi, I'm </p>
        <p className="text-black text-5xl font-semibold mb-2">Văn Duy</p>
        <p className="text-textGrey text-[28px] mb-2 font-semibold">Frontend Developer</p>
        <div className="flex items-center gap-6 mb-2">
          <button className="duration-300 border-2 text-[13px] hover:bg-black hover:text-white font-semibold border-black p-4 rounded-[30px]">
            Download CV
          </button>
          <button className="duration-300 border-2 text-[13px] bg-buttonGrey hover:bg-black text-white font-semibold border-black p-4 rounded-[30px]">
            Contact Info
          </button>
        </div>
        <div className="flex gap-4">
          <img src={linkedin} alt="" className="w-8 h-8 object-cover" />
          <img src={github} alt="" className="w-8 h-8 object-cover" />
        </div>
      </div>
    </div>
  );
};
export default Profile;
