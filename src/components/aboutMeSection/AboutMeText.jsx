import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I am a passionate and detail-oriented Developer/Support Engineer with over 4+ years of experience in front-end, web, and mobile software development. Proficient in a range of modern technologies, including JavaScript, HTML, CSS, Node.js, Angular, React, and TypeScript, I specialize in building responsive, user-friendly applications and delivering seamless digital experiences.In addition to my technical expertise, I have completed formal training in Artificial Intelligence and Machine Learning, equipping me with the skills to design, develop, and deploy intelligent, data-driven applications. My background also includes creating AI-powered solutions like chatbots, recommendation engines, and analytics dashboards. I thrive in agile environments, collaborating with cross-functional teams to deliver high-quality, user-centric products. Dedicated to continuous learning, I bring both a technical and problem-solving mindset to every project, ensuring impactful and innovative results.


      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
