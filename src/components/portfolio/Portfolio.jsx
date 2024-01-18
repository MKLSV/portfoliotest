import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "React Comerce1",
        img: "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=900&t=st=1705441624~exp=1705442224~hmac=79fa0e254b421c22c7a9cda0c809cee624b1a657b94b24652ac90e25124c4773",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error nesciunt quisquam corrupti, eum molestias omnis quo ad ex veritatis itaque aut, temporibus delectus hic? Dolore sint maiores cum vitae?"
    },
    {
        id: 2,
        title: "React Comerce2",
        img: "https://img.freepik.com/free-photo/top-view-food-banquet_23-2149893441.jpg?w=996&t=st=1705533813~exp=1705534413~hmac=35aa31b0fca694a209fc8bdb966317e44097e645c24382c9d2f9821b2701ec92",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error nesciunt quisquam corrupti, eum molestias omnis quo ad ex veritatis itaque aut, temporibus delectus hic? Dolore sint maiores cum vitae?"
    },
    {
        id: 3,
        title: "React Comerce3",
        img: "https://img.freepik.com/free-psd/american-food-website-app-template_23-2148477329.jpg?t=st=1705533813~exp=1705534413~hmac=3751b0abf9e26e33cba465a3b669a8385aeed005d68d5b2e57005d5406810dc0",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error nesciunt quisquam corrupti, eum molestias omnis quo ad ex veritatis itaque aut, temporibus delectus hic? Dolore sint maiores cum vitae?"
    },
    {
        id: 4,
        title: "React Comerce4",
        img: "https://img.freepik.com/free-psd/veterans-day-instagram-stories-collection-with-cracked-concrete-texture_23-2149713207.jpg?t=st=1705533813~exp=1705534413~hmac=514950bb48a566536796cb35fe4c8acaadc825c882808e44070f6b931d2464ae",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro error nesciunt quisquam corrupti, eum molestias omnis quo ad ex veritatis itaque aut, temporibus delectus hic? Dolore sint maiores cum vitae?"
    },
]

const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return <section >
        <div className="container">
            {/* {item.id === 1 ?
                <div className="wrapper first">
                    <div className="imageContainer">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="textContainer">
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </div>
                </div>
                : */}
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            {/* // } */}
        </div>
    </section>
}
export const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })
    const scaleX = useSpring(scrollYProgress, {
        stiffeness: 100,
        damping: 30
    })
    return (
        <div className="portfolio">
            <div className="progress">
                <h1>Features Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            <div className="portfolio-container">
                {items.map((item) => (
                    <Single item={item} key={item.id} />
                ))}
            </div>
        </div>

    )
}
