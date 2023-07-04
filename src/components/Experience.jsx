import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Experiencec from "./ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../constants";

import logooc from '../assets/occlient/logooc.webp'


const Experience = () => {
  return (
    <section className='p-10 mt-10 mb-10 w-full flex flex-col'>
      <motion.div>
        <span className='text-xl text-slate-500 flex justify-center'>MON ÉVOLUTION EN TANT QUE DÉVELOPPEUR</span>
        <h1 className='text-6xl mt-5 flex justify-center'>Experience.</h1>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <motion.div className="flex justify-center h-20 space-x-1 bg-openpurple rounded-xl">
          <p className="text-3xl flex items-center xx:hidden">EN FORMATION CHEZ</p>
          <img className="h-20 w-36 flex" src={logooc} alt="Logo openclassrooms" />
        </motion.div>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <Experiencec
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
        <motion.div className="flex justify-center h-20 space-x-1 bg-slate-900 rounded-xl">
          <p className="text-3xl flex items-center">À VENIR ...</p>
        </motion.div>
      </div>
    </section>
  )
}

export default SectionWrapper(Experience, "experience");