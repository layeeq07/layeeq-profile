// src/components/SingleProject.jsx
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link }) => (
  <motion.div
    variants={fadeIn("top", 0)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
    className={`
      flex w-full sm:flex-col-reverse items-center gap-8
      ${align === "left" ? "md:flex-row" : "md:flex-row-reverse"}
      justify-end sm:flex-col
    `}
  >
    <div>
      <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
      <h3
        className={`
          text-xl font-thin text-white font-special sm:text-center
          ${align === "left" ? "md:text-right" : "md:text-left"}
        `}
      >
        {year}
      </h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          text-lg flex gap-2 items-center text-cyan hover:text-orange
          transition-all duration-500 cursor-pointer
          ${align === "left" ? "md:justify-self-end" : "md:justify-self-start"}
        `}
      >
        View <BsFillArrowUpRightCircleFill />
      </a>
    </div>
    <div className="relative max-h-[220px] max-w-[400px] rounded-xl overflow-hidden border border-white transform transition-all duration-500 hover:scale-110">
      <div className="absolute top-0 left-0 w-full h-full bg-cyan opacity-50 hover:opacity-0 transition-all duration-500 md:block sm:hidden" />
      <img
        src={image}
        alt={`${name} screenshot`}
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
);

export default SingleProject;
