const Footer = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-8">
      <ul className="flex items-center gap-6 flex-wrap flex-col lg:flex-row">
        <li>
          <a
            href="#about"
            className="text-[24px] hover:text-textHover hover:underline-offset-[1rem] hover:underline  hover:decoration-textHover "
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-[24px] hover:text-textHover hover:underline-offset-[1rem] hover:underline  hover:decoration-textHover "
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-[24px] hover:text-textHover hover:underline-offset-[1rem] hover:underline  hover:decoration-textHover "
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-[24px] hover:text-textGrey hover:underline-offset-[1rem] hover:underline hover:decoration-textHover "
          >
            Contact
          </a>
        </li>
      </ul>

      <p className="my-8">Copyright © 2024 vduyit. All Rights Reserved.</p>
    </div>
  );
};
export default Footer;
