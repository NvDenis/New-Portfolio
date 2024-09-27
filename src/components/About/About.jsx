import aboutpic from "../../assets/about-pic.png";
import experience from "../../assets/experience.png";
import education from "../../assets/education.png";

const About = () => {
  return (
    <div className="section" id="about">
      <p className="text-center text-textGrey text-base">Get To Know More</p>
      <h1 className="text-5xl leading-[72px] font-semibold text-center ">About Me</h1>

      <div className="h-[80%] gap-4 lg:gap-20 flex flex-col lg:flex-row items-center">
        <img src={aboutpic} className="w-[275px] h-[275px] lg:w-[400px] lg:h-[400px] rounded-3xl" />

        <div>
          <div className="flex flex-wrap gap-4 lg:gap-8 mb-6">
            <div className="flex flex-[1_0_300px] items-center p-4 flex-col  border border-buttonGrey rounded-3xl">
              <img src={experience} className="w-8 h-8" />
              <p className="text-[19px] font-semibold">Experience</p>
              <p className="text-[16px] text-textGrey">1+ years</p>
              <p className="text-[16px] text-textGrey">Frontend Developer</p>
            </div>
            <div className="flex flex-[1_0_300px] items-center p-4 flex-col  border border-buttonGrey rounded-3xl">
              <img src={education} className="w-8 h-8" />
              <p className="text-[19px] font-semibold">Education</p>
              <p className="text-[16px] text-textGrey">Thủ Dầu Một University</p>
              <p className="text-[16px] text-textGrey">Infomation Technology Major</p>
            </div>
          </div>
          <p className="hidden lg:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam quidem earum eum
            perspiciatis necessitatibus maiores ex excepturi laboriosam nulla obcaecati adipisci
            ratione saepe consequatur nemo modi, harum dignissimos consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
