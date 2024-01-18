import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: {
      straggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      straggerChildren: 0.05,
      straggerDirection: -1,
    },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  },
}

export const Links = () => {

  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contacts",
    "About",
  ]

  return (
    <motion.div className='links' variants={variants}>{items.map((item, id) => (
      <motion.a key={id} href={`#${item}`} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>
    ))}</motion.div>
  )
}
