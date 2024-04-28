"use client"
import { motion } from "framer-motion"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100 ,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition:{
      delay : 0.2,
      duriation : 0.5,
    }

  }
}

function About() {
  return (
    <motion.div id="about"  variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
    viewport={{once:true}}>
    <section  className="  text-center mt-6 md:text-left md:pl-12 md:pt-10">
    <h1 className="text-5xl mb-1">Hello my name is
    <span className=" font-medium text-pantone text-5xl md:text-6xl ">  Amirreza Mahmoudi</span>
    </h1>
    <p className=" md:text-3xl mt-6 text-xl font-light leading-snug md:w-3/4 px-6 md:px-0">
    I'm a  <span className=" font-normal text-pantone">Frontend developer</span> based in Iran. My ultimate goal is to create websites that are
     <span className=" font-normal text-pantone"> accessible </span> , <span className=" font-normal text-pantone"> high-performing  </span>,
    and <span className=" font-normal text-pantone"> visually appealing</span>.I wanted to become a programmer Since high school. After some research,
    I discovered that web development was the perfect fit for me. My goal is to become a Full-Stack Developer one day.
    </p>
    </section>
    <section className="  text-center my-8 md:text-left md:pl-12 md:pt-10 ">
      <h1 className="mb-4 text-3xl">Technologies I use :</h1>
      <div className=" flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start">
      <ul className=" flex md:flex-col text-2xl font-light mx-8 ">
        <li className="m-4">HTML</li>
        <li className="m-4">CSS</li>
        <li className="m-4">Java Script</li>
      </ul>
      <ul className=" flex md:flex-col text-2xl font-light ">
        <li className="m-4">Next Js</li>
        <li className="m-4">React Js</li>
        <li className="m-4">Type Script</li>
      </ul>
      <ul className=" flex md:flex-col text-2xl font-light mx-8">
        <li className="m-4">jQuery</li>
        <li className="m-4">Tailwind Css</li>
        <li className="m-4">Sass</li>
      </ul>
      </div>
      </section>
    </motion.div>
  )
}

export default About