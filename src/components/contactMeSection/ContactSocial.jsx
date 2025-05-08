import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/mohammed-layeeq-a3b07613a/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/layeeq07" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/layeeq07" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
