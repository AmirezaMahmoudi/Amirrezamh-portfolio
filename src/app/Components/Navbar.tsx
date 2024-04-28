"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 0 ,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition:{
      delay : 0.3,
      duriation : 0.5,
    }

  }
}

function Navbar() {
  return (
    <motion.header className="flex justify-center m-8 sticky top-0 z-10" variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
    viewport={{once:true}}>
    <nav className="bg-gradient-to-b from-white28 to-white13 py-2 px-6 rounded-full backdrop-blur-lg  ">
        <ul className=" flex gap-6 text-xl">
        <Link href="#about">
            <li className=" bg-lightGray hover:bg-darkGray active:bg-darkGray px-6 py-2 rounded-3xl cursor-pointer">
            <h1>About</h1>
            </li>
        </Link>
        <Link href="#projects">
            <li className=" bg-lightGray hover:bg-darkGray active:bg-darkGray px-6 py-2 rounded-3xl cursor-pointer">
            <h1>Projects</h1>
            </li>
        </Link>
        <Link href="#contact">
            <li className=" bg-lightGray hover:bg-darkGray active:bg-darkGray px-6 py-2 rounded-3xl cursor-pointer">
            <h1>Contact</h1>
            </li>
        </Link>
        </ul>
    </nav>
    </motion.header>
  )
}

export default Navbar