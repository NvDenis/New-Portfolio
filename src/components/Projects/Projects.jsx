import nonthao from "../../assets/non-thao-fe.vercel.app_.png";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <p className="text-center text-borderGrey text-base">Browse My Recent</p>
      <h1 className="text-5xl leading-[72px] font-semibold text-center ">
        Projects
      </h1>
      <div className="flex flex-wrap gap-8 my-8">
        <div className="border-2 flex-[1_0_300px]  p-6 border-borderGrey rounded-3xl flex flex-col items-center">
          <img
            src={nonthao}
            alt=""
            className="w-[250px] h-[250px] lg:w-[283px] lg:h-[283px] rounded-3xl"
          />

          <h2 className="m-4  text-[28px]  font-semibold">NonThao Shop</h2>
          <div className="flex w-[100%] lg:w-[80%] gap-6 items-center justify-center">
            <button className="border-2 flex-1 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-borderGrey rounded-full text-[13px] hover:border-black">
              Github
            </button>
            <button className="border-2 flex-1 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-borderGrey rounded-full text-[13px] hover:border-black">
              Live Demo
            </button>
          </div>
        </div>
        <div className="border-2 flex-[1_0_300px]  p-6 border-borderGrey rounded-3xl flex flex-col items-center">
          <img
            src={nonthao}
            alt=""
            className="w-[250px] h-[250px] lg:w-[283px] lg:h-[283px] rounded-3xl"
          />

          <h2 className="m-4  text-[28px]  font-semibold">NonThao Shop</h2>
          <div className="flex w-[100%] lg:w-[80%] gap-6 items-center justify-center">
            <button className="border-2 flex-1 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-borderGrey rounded-full text-[13px] hover:border-black">
              Github
            </button>
            <button className="border-2 flex-1 duration-300 font-semibold p-4 hover:bg-black hover:text-white border-borderGrey rounded-full text-[13px] hover:border-black">
              Live Demo
            </button>
          </div>
        </div>
        <div className="border-2 flex-[1_0_300px]  p-6 border-borderGrey rounded-3xl flex flex-col items-center">
          <img
            src={nonthao}
            alt=""
            className="w-[250px] h-[250px] lg:w-[283px] lg:h-[283px] rounded-3xl"
          />

          <h2 className="m-4  text-[28px]  font-semibold">NonThao Shop</h2>
          <div className="flex w-[100%] lg:w-[80%] gap-6 items-center justify-center">
            <button className="border-2 flex-1 duration-300 font-semibold p-4 hover:bg-black hover:text-white hover:border-black border-borderGrey rounded-full text-[13px]">
              Github
            </button>
            <button className="border-2 flex-1 duration-300 font-semibold p-4 hover:bg-black hover:text-white hover:border-black border-borderGrey rounded-full text-[13px]">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
