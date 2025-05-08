import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Web Developer",
    company: "GIFTY Solutions",
    date: "2021 - Present",
    responsibilities: [
      "Designed and developed intuitive user interfaces and dynamic website layouts using modern front-end technologies such as HTML, CSS, and JavaScript.",
      "Spearheaded the integration of React.js to create responsive, high-performance web applications, improving user engagement and reducing development cycles through component-based architecture.",
      "Worked within agile development environments, actively participating in sprint planning, backlog grooming, and cross-functional team collaboration to meet project deadlines and ensure alignment with client goals.",
      "Implemented comprehensive mobile responsiveness strategies and WCAG accessibility standards, ensuring inclusive designs that function seamlessly across a variety of devices and browsers.",
      "Conducted rigorous testing, including unit and end-to-end tests, to identify and resolve bugs. Utilized tools like Jest and Cypress for maintaining a robust CI/CD pipeline.",
    ],
  }
];

const education = [
  {
    degree: "Python Web Developer",
    institution: "Siasat",
    date: "2024",
  },
  {
    degree: "Artificial Intelligence and Machine Learning",
    institution: "International Institute of Information Technology Hyderabad",
    date: "2022 - 2023",
  },
  {
    degree: "Bachelors of Commerce",
    institution: "Bharathidasan University",
    date: "2015 - 2018",
  },
  {
    degree: "High School",
    institution: "Al Ain Juniors School",
    date: "2012 - 2014",
  },
];

const AllExperiences = () => {
  return (
    <div>
      {/* Experience Section */}
      <div className="flex md:flex-row sm:flex-col items-center justify-between">
        {experiences.map((experience, index) => {
          return (
            <>
              <SingleExperience key={index} experience={experience} />
              {index < experiences.length - 1 ? (
                <motion.div
                  variants={fadeIn("right", 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                >
                  <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
                </motion.div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
      {/* Education Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <ul className="list-disc pl-5">
          {education.map((edu, index) => (
            <li key={index} className="mb-2">
              <strong>{edu.degree}</strong> - {edu.institution} ({edu.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllExperiences;
