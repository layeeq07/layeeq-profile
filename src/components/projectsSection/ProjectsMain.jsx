// src/components/ProjectsMain.jsx
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Coffee Shop Website",
    year: "Mar 2023",
    align: "right",
    image: "{`${import.meta.env.BASE_URL}images/Coffee.png", // served from public/
    link: "https://layeeq07.github.io/Coffee-Shop-/"
  },
  {
    name: "PROMS Web Application",
    year: "Sept 2024",
    align: "left",
    image: "{`${import.meta.env.BASE_URL}images/Proms.png",
    link: "https://app.wehealthify.org/proms/"
  },
  {
    name: "Pizza Slider",
    year: "Jan 2022",
    align: "right",
    image: "{`${import.meta.env.BASE_URL}images/Pizza.png",
    link: "https://layeeq07.github.io/Pizza-Slider/"
  },
  {
    name: "Furni Shop",
    year: "May 2025",
    align: "left",
    image: "{`${import.meta.env.BASE_URL}images/Furni.png",
    link: "https://layeeq07.github.io/Furni-Shop/"
  }
];

const ProjectsMain = () => (
  <div id="projects" className="max-w-[1200px] mx-auto px-4">
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
    >
      <ProjectsText />
    </motion.div>

    <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
      {projects.map((project, index) => (
        <SingleProject
          key={index}
          name={project.name}
          year={project.year}
          align={project.align}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  </div>
);

export default ProjectsMain;
