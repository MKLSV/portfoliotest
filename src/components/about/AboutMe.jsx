import "./about.scss";
import { motion } from 'framer-motion'
import { Skills } from "./Skills";
import { TableSvg } from "./TableSvg";


const textVariants = {
  initial: {
      x: -500,
      opacity: 0
  },
  animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.1
      }
  }
}
export const AboutMe = () => {
  return (
    <div className="about-section">
      <div className="wrapper">
      <motion.div variants={textVariants} className='table-svg' > 
        <TableSvg />
      </motion.div>
        <div className="about-me">
          <span className="title">About Me</span>
          <p className="discription">I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.</p>

          <span className="skills">Skills</span>
          <Skills />
        </div>
      </div>
    </div>
  );
};

