import { SideBar } from '../sidebar/SideBar'
import { motion } from 'framer-motion'
import './navbar.scss'


export const NavBar = () => {
    return (
        <div className='navbar'>
            <SideBar />
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Lama Dev</motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" /></a>
                    <a href="#"><img src="/dribbble.png" /></a>
                    <a href="#"><img src="instagram.png" /></a>
                    <a href="#"><img src="youtube.png" /></a>
                </div>
            </div>
        </div>
    )
}
