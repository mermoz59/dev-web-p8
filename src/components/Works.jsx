import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion";
import { projects } from '../constants';
import { SectionWrapper } from "../hoc";
import ProjectCard from './ProjectCard';


const Works = () => {
  return (
    <section className='p-10 mb-10 w-full'>
      <motion.div variants={textVariant()} className='w-full mt-20 flex flex-col items-center'>
        <span className='text-xl text-slate-500'>MES TRAVAUX</span>
        <h1 className='text-6xl mt-5 mb-20'>Projets.</h1>
      </motion.div>

      <div className='mt-5 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
    </section>
  )
}

export default SectionWrapper(Works, "work")