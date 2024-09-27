import nonthao from "../../assets/non-thao-fe.vercel.app_.png";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <p className="text-center text-textGrey text-base">Browse My Recent</p>
      <h1 className="text-5xl leading-[72px] font-semibold text-center ">Projects</h1>
      <div className="flex flex-wrap gap-8 my-8">
        <div className="border flex-[1_0_350px]  p-6 border-buttonGrey rounded-3xl flex flex-col items-center">
          <img src={nonthao} alt="" className="w-[283px] h-[283px] rounded-3xl" />

          <h2 className="m-4  text-[28px]  font-semibold">NonThao Shop</h2>
          <div className="flex gap-4 items-center justify-center">
            <button className="border-2 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-buttonGrey rounded-3xl text-[13px]">
              Github
            </button>
            <button className="border-2 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-buttonGrey rounded-3xl text-[13px]">
              Live Demo
            </button>
          </div>
        </div>
        <div className="border flex-[1_0_350px]  p-6 border-buttonGrey rounded-3xl flex flex-col items-center">
          <img src={nonthao} alt="" className="w-[283px] h-[283px] rounded-3xl" />

          <h2 className="m-4  text-[28px]  font-semibold">NonThao Shop</h2>
          <div className="flex gap-4 items-center justify-center">
            <button className="border-2 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-buttonGrey rounded-3xl text-[13px]">
              Github
            </button>
            <button className="border-2 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-buttonGrey rounded-3xl text-[13px]">
              Live Demo
            </button>
          </div>
        </div>
        <div className="border flex-[1_0_350px]  p-6 border-buttonGrey rounded-3xl flex flex-col items-center">
          <img src={nonthao} alt="" className="w-[283px] h-[283px] rounded-3xl" />

          <h2 className="m-4  text-[28px]  font-semibold">NonThao Shop</h2>
          <div className="flex gap-4 items-center justify-center">
            <button className="border-2 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-buttonGrey rounded-3xl text-[13px]">
              Github
            </button>
            <button className="border-2 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-buttonGrey rounded-3xl text-[13px]">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
