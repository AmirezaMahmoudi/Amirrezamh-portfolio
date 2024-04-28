"use client"

import Image from "next/image"
import Link from "next/link"
import githubIcon from "../../../public/assets/github.svg"
import gmailIcon from "../../../public/assets/gmail.svg"
import linkedinIcon from "../../../public/assets/linkedin.svg"
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
export default function Contact() {
  return (
    <>
      <motion.section className=" mt-28 md:mt-56"
      variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
      viewport={{once:true}}>
        <article className=" flex flex-col justify-start items-center text-center font-semibold text-4xl md:text-6xl " id="contact">
            <h1>Did you like what you saw? </h1>
            <h2 className=" text-pantone"> Let's chat!</h2>
        </article>
        <div className=" flex justify-center mt-10 gap-16">
          <Link href="https://github.com/AmirezaMahmoudi" target="_blank">
          <Image src={githubIcon} alt="Github" width={63} height={63}/>
          </Link>
          <Link href="mailto:amirrezamh03@gmail.com" target="_blank">
          <Image src={gmailIcon} alt="Gmail" width={63} height={63}/>
          </Link>
          <Link href="https://www.linkedin.com/in/amirreza-mahmoudi-5aa412224/" target="_blank">
          <Image src={linkedinIcon} alt="LinkedIn" width={63} height={63}/>
          </Link>
        </div>
        <footer className=" mt-16 text-center text-lg">
          <h1>2024 © Designed and developed by  Amirreza Mahmoudi</h1>
        </footer>
        </motion.section>
    </>
  )
}
