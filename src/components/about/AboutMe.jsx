import "./about.scss";
import { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import { Skills } from "./Skills";
import { TableSvg } from "./TableSvg";

const svgVariants = {
  initial: {
    x: -500,
    // y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}
const textVariants = {
  initial: {
    x: 400,
    // y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

export const AboutMe = () => {
  const ref = useRef()
  const isInView = useInView(ref, { margin: '-100px' })
  return (
    <div className="about-section">
      <div className="wrapper">
        <motion.div variants={svgVariants}
          initial="initial"
          //   animate="animate"
          //   whileInView="animate"
          ref={ref}
          animate={isInView && "animate"} className='table-svg' >
          <TableSvg />
        </motion.div>
        <motion.div className="about-me" variants={textVariants}
          initial="initial"
          //   animate="animate"
          //   whileInView="animate"
          ref={ref}
          animate={isInView && "animate"}>
          <span className="title">About Me</span>
          <p className="discription">I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.</p>

          <span className="skills">Skills</span>
          <Skills />
        </motion.div>
      </div>
    </div>
  );
};

