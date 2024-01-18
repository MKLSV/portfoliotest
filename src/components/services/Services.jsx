import { useRef } from 'react'
import './services.scss'
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
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

export const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, { margin: '-100px' })
    return (
        <motion.div variants={variants}
            initial="initial"
            //   animate="animate"
            //   whileInView="animate"
            ref={ref}
            animate={isInView && "animate"}
            className='services'>
            <motion.div variants={variants} className="textContainer">
                <p>I focus on helping your brand grow<br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div variants={variants} className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><b>Unique</b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><b>For Your</b> Business.</h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div variants={variants} className="listContainer">
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste sunt iusto repudiandae suscipit temporibus repellendus, est minima reprehenderit quis maiores similique neque, laboriosam at, in debitis voluptates doloremque nisi?</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste sunt iusto repudiandae suscipit temporibus repellendus, est minima reprehenderit quis maiores similique neque, laboriosam at, in debitis voluptates doloremque nisi?</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste sunt iusto repudiandae suscipit temporibus repellendus, est minima reprehenderit quis maiores similique neque, laboriosam at, in debitis voluptates doloremque nisi?</p>
                    <button>Go</button>
                </div>
                <div className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iste sunt iusto repudiandae suscipit temporibus repellendus, est minima reprehenderit quis maiores similique neque, laboriosam at, in debitis voluptates doloremque nisi?</p>
                    <button>Go</button>
                </div>
            </motion.div>
        </motion.div>
    )
}
