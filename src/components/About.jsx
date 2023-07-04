/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Tilt from 'react-parallax-tilt';
import logoReact from '../assets/tech/reactjs.webp'
import logoNode from '../assets/tech/nodejs.webp'
import logoDev from '../assets/tech/logodev.webp'
import logoAgile from '../assets/tech/logoagile.webp'


const About = () => {
  return (
    <section className='p-10 mt-10 mb-10 w-full'>
      <motion.div variants={textVariant()}>
        <span className='text-xl text-slate-500'>INTRODUCTION</span>
        <h1 className='text-6xl mt-5'>About me.</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 3)}
        className='text-l mt-12 w-3/4 mb-16'
      >
        En tant que développeur web full stack, je suis passionné par la création d'applications web dynamiques et innovantes. Diplômé en développement web, je possède une expertise solide en JavaScript et React, des technologies qui alimentent les expériences interactives modernes.<span className="xxs:hidden"> Maîtrisant les langages fondamentaux tels que HTML, CSS et JavaScript, je suis également compétent dans l'utilisation des frameworks tels que React, Node.js et Express.js pour construire des applications robustes et efficaces. J'ai également travaillé avec des bases de données NoSQL telles que MongoDB en utilisant le framework Mongoose pour optimiser la gestion des données. De plus, j'ai acquis une solide connaissance de la méthodologie Agile SCRUM, qui me permet de collaborer efficacement au sein d'équipes de développement.</span>
      </motion.p>

      <div className="aboutcard flex justify-between gap-6">
      <Tilt>
      <motion.div variants={fadeIn("right", "spring", 1*0.5, 0.75)} className="card-element-bg flex justify-center items-center w-64 h-72 rounded-2xl bg-gradient-to-t from-white via-teal-300 to-teal-300">
        <div style={{ height: '284px', width: '252px'}} className="card-element flex flex-col justify-center items-center rounded-2xl bg-bgcard">
          <img src={logoDev} alt="Logo de Developpeur" className="w-20 h-20 mb-10"/>
          <h1 className="text-xl">Développeur Web</h1>
        </div>
      </motion.div>
      </Tilt>
      <Tilt>
      <motion.div variants={fadeIn("right", "spring", 2*0.5, 0.75)} className="flex justify-center items-center bg-white w-64 h-72 rounded-2xl bg-gradient-to-t from-white via-teal-300 to-teal-300">
        <div style={{ height: '284px', width: '252px'}} className="flex flex-col justify-center items-center rounded-2xl bg-bgcard">
          <img src={logoReact} alt="Logo de React" className="w-20 h-20 mb-10"/>
          <h1 className="text-xl">React</h1>
        </div>
      </motion.div>
      </Tilt>
      <Tilt>
      <motion.div variants={fadeIn("right", "spring", 3*0.5, 0.75)} className="flex justify-center items-center bg-white w-64 h-72 rounded-2xl bg-gradient-to-t from-white via-teal-300 to-teal-300">
        <div style={{ height: '284px', width: '252px'}} className="flex flex-col justify-center items-center rounded-2xl bg-bgcard">
          <img src={logoNode} alt="Logo de Node" className="w-20 h-20 mb-10"/>
          <h1 className="text-xl">Back-end</h1>
        </div>
      </motion.div>
      </Tilt>
      <Tilt>
      <motion.div variants={fadeIn("right", "spring", 4*0.5, 0.75)} className="flex justify-center items-center bg-white w-64 h-72 rounded-2xl bg-gradient-to-t from-white via-teal-300 to-teal-300">
        <div style={{ height: '284px', width: '252px'}} className="flex flex-col justify-center items-center rounded-2xl bg-bgcard">
          <img src={logoAgile} alt="Logo de Agile" className="w-24 h-24 mb-6"/>
          <h1 className="text-xl">Agile SCRUM</h1>
        </div>
      </motion.div>
      </Tilt>
      </div>

    </section>
  )
}

export default SectionWrapper(About, "about");