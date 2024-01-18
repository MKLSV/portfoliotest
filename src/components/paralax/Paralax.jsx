import { useRef } from 'react'
import './paralax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Paralax = ({ type }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const textBg = useTransform(scrollYProgress, [0, 1], ["-50%", "500%"])
    const yBg = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"])
    const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
    return (
        <div className='paralax' style={{
            background: type === "services" ?
                "linear-gradient(180deg, #111132, #0c0c1d)"
                :
                "linear-gradient(180deg, #111132, #505064)"
        }}>
            <motion.h1 style={{ y: textBg }}>{type === "services" ? "What we do?" : "What we did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg }} className="planet"></motion.div>
            <motion.div style={{ x: xBg }} className="stars"></motion.div>
        </div>
    )
}
