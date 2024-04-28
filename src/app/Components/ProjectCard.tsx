import Image from "next/image"
import Link from "next/link"


interface ProjectCard {
    title: string
    description: string
    liveLink:string
    repolink:string
    imgURL: string
    toolOne:string
    toolTwo:string
    toolThree?:string
  }
function ProjectCard( props: ProjectCard) {
  return (
    <li className="bg-gradient-to-b from-white28 to-white13  pb-2 rounded-lg">
        <Image src={props.imgURL}  alt={`Screenshot of ${props.title}`} width={581} height={250} className="rounded-t-lg" />
        <section className="p-6 flex justify-between">
        <h1 className=" text-2xl font-bold">{props.title}</h1>
        <div className=" font-extrabold text-base">
        <span className=" mx-2">{props.toolOne}</span>
        <span  className=" mx-2">{props.toolTwo}</span>
        <span  className=" mx-2">{props.toolThree}</span>
        </div>
        </section>
        <section className="pl-4">
          <p className=" text-lg  text-center md:text-left mb-6 w-96 ">{props.description} </p>
          <div className=" flex justify-center gap-4">
          <Link href={props.liveLink} target="_blank" className=" opacity-70 hover:opacity-100 bg-pantone rounded-3xl px-6 py-2 text-black text-lg" >
            <button>Live</button>
          </Link>
          <Link href={props.repolink} target="_blank" className="opacity-70 hover:opacity-100 bg-white rounded-3xl px-6 py-2 text-black text-lg">
            <button>Repo</button>
          </Link>
          </div>
        </section>
  </li>
  )
}

export default ProjectCard