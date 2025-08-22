import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="layeeqahmed07@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+971 56 566 9921" Image={FiPhone} />
      <SingleInfo text="Abu Dhabi, United Arab Emirates" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
