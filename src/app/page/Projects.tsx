"use client"

import ProjectCard from "../Components/ProjectCard"
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
      duriation : 0.7,
    }

  }
}

function Projects() {
  return (
    <>
    <motion.section className="  text-center  md:text-left md:pl-12 md:pt-10"  id="projects"
    variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
    viewport={{once:true}}>
    <h1 className="text-5xl my-12 text-center md:text-left">Here are some of my
    <span className=" font-medium text-pantone text-5xl md:text-6xl" > Projects</span>
    </h1>
     <ul className=" flex flex-wrap gap-6 justify-around mt-12 " >
    <ProjectCard title="Designo"
     description=" A 95+ lighthouse score  responsive multi-page website containing 7 pages with form validation."
     toolOne="HTML" toolTwo="CSS" toolThree="JS"
    imgURL="/assets/Designo.png"
    repolink="https://github.com/AmirezaMahmoudi/desgino-website"
    liveLink="https://amirezamahmoudi.github.io/desgino-website/"
    />
    <ProjectCard title="REST Countries"  
    description="website that shows information about countries using REST countries API and featuring Light/Dark theme"
     toolOne="React Js" toolTwo="CSS" imgURL="/assets/Country.png" repolink="https://github.com/AmirezaMahmoudi/rest-country-api"
    liveLink="https://rest-country-api-pink-five.vercel.app/"/>


    <ProjectCard title="Product Feedback"  description="A CRUD web app where you can Post/Edit/Delete feedbacks wich saves to local storage" toolOne="React" toolTwo="Redux" toolThree="Styled Components" imgURL="/assets/Product.webp"
    repolink="https://github.com/AmirezaMahmoudi/product-feedback"
    liveLink="https://product-feedback-beta.vercel.app/"/>

    
<ProjectCard title="Space Tourism"  description=" Responsive Multipage website with animations explore destinations, meet the crew, and dive into technologies " toolOne="Nextjs" toolTwo="Tailwind CSS" toolThree="Framer Motion" imgURL="/assets/Space.png"
    repolink="https://github.com/AmirezaMahmoudi/Space-tourism-website"
    liveLink="https://space-tourism-website-five-gamma.vercel.app/"/>
    </ul>
    </motion.section>
    </>

    )
}

export default Projects