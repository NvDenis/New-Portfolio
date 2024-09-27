import checkmark from "../../assets/checkmark.png";

const Experience = () => {
  return (
    <div className="section" id="experience">
      <p className="text-center text-textGrey text-base">Explore My</p>
      <h1 className="text-5xl leading-[72px] font-semibold text-center ">Experience</h1>

      <div className="flex flex-wrap gap-8 my-8">
        <div className="flex-[1_0_300px] border border-buttonGrey rounded-3xl p-4">
          <h2 className="text-textHover text-center text-[28px] mb-8 font-semibold">
            Frontend Skills
          </h2>
          <div className="flex flex-wrap gap-10">
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">HTML</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">CSS</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">JAVASCRIPT</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">TYPESCRIPT</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">REACJT</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">ANGULAR</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_300px] border border-buttonGrey rounded-3xl p-4">
          <h2 className="text-textHover text-center text-[28px] mb-8 font-semibold">
            Backend Skills
          </h2>
          <div className="flex flex-wrap gap-10">
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">NODEJS</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">EXPRESS</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">MONGODB</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-8 flex-[1_0_10rem]">
              <img src={checkmark} alt="" className="w-8 h-8 object-cover" />
              <div>
                <p className="text-[19px] font-semibold">GIT</p>
                <p className="text-base text-textGrey">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
