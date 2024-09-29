import email from "../../assets/email.png";
import linkedin from "../../assets/linkedin.png";
import Footer from "../Footer/Footer";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:vduyit@gmail.com";
  };
  return (
    <div id="contact" className="section h-[70vh]">
      <p className="text-center text-textGrey text-base">Get In Touch</p>
      <h1 className="text-5xl leading-[72px] font-semibold text-center ">
        Contact Me
      </h1>

      <div className="flex flex-col items-center justify-between h-[80%]">
        <div className="flex justify-center my-8">
          <div className="p-6 flex flex-col lg:flex-row items-center gap-4 border border-textHover rounded-3xl ">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleEmailClick}
            >
              <img
                className="w-10 h-10 object-cover text-[18px] "
                src={email}
                alt=""
              />
              <span className="text-[20px] hover:text-textHover hover:decoration-textHover hover:underline hover:underline-offset-[1rem]  duration-300">
                vduyit@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img className="w-8 h-8 object-cover " src={linkedin} alt="" />
              <span className="text-[20px] hover:text-textHover hover:decoration-textHover hover:underline hover:underline-offset-[1rem]  duration-300">
                Linkedin
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
